import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class BugsService {
  async edit(id, creatorEmail, update) {
    let data = await dbContext.Bugs.findOneAndUpdate(
      { _id: id, creatorEmail: creatorEmail, closed: false},
      update,
      { new: true }
    );
     if (!data) {
      throw new BadRequest("Invalid ID or you do not own this bug");
    }
    return data;
  }
  async create(rawData) {
    let data = await dbContext.Bugs.create(rawData);
    return data;
  }

  async findAll(query = {}) {
    let values = await dbContext.Bugs.find(query).populate(
      "creator",
      "name picture"
    );
    return values;
  }
  async findById(id, creatorEmail) {
    let value = await dbContext.Bugs.findById({ _id: id, creatorEmail });
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
  async softDelete(id, creatorEmail) {
  let data = await dbContext.Bugs.findOneAndUpdate(
      { _id: id, creatorEmail },
      update,
      { new: true }
    );
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this bug");
    }
    return data;
  }
  }
}

export const bugsService = new BugsService();
