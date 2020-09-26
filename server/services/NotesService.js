import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class NotesService {
  async getNotesByBugId(listId) {
    let data = await dbContext.Notes.find(listId);
    if (!data) {
      throw new BadRequest("Invalid Id or you do not have Permissions");
    }
    return data;
  }
  async create(rawData) {
    let data = await dbContext.Notes.create(rawData);
    return data;
  }
  async edit(id, creatorEmail, update) {
    let data = await dbContext.Notes.findOneAndUpdate(
      { _id: id, creatorEmail: creatorEmail },
      update,
      { new: true }
    );
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board");
    }
    return data;
  }
  async delete(id, creatorEmail) {
    let data = await dbContext.Notes.findByIdAndDelete({
      _id: id,
      creatorEmail: creatorEmail,
    });
    if (!data) {
      throw new BadRequest("Invalid Id or you dont have Permission to Delete");
    }
  }
}

export const notesService = new NotesService();
