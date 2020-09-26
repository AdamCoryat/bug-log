import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class BugsService {
  async findAll(query = {}) {
    let bugs = await dbContext.Bugs.find(query).populate(
      "creator",
      "name picture"
    );
    return bugs;
  }
  async findById(id, creatorEmail) {
    let bug = await dbContext.Bugs.findById({ _id: id, creatorEmail });
    if (!bug) {
      throw new BadRequest("Invalid Id");
    }
    return bug;
  }
  async create(rawData) {
    let data = await dbContext.Bugs.create(rawData);
    return data;
  }
  async edit(id, creatorEmail, update) {
    let data = await dbContext.Bugs.findOneAndUpdate(
      { _id: id, creatorEmail: creatorEmail, closed: false },
      update,
      { new: true }
    );
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this Bug Report");
    }
    return data;
  }
  async softDelete(id, creatorEmail) {
    let data = await dbContext.Bugs.findById({
      _id: id,
      creatorEmail: creatorEmail,
      closed: false,
    });
    // @ts-ignore
    data.closed = true;
    let modified = await dbContext.Bugs.findOneAndUpdate(
      { _id: id, creatorEmail: creatorEmail },
      data,
      { new: true }
    );
    return modified;
  }
}

export const bugsService = new BugsService();
