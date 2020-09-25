import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class NotesService {
  async getNotesByBugId(listId) {
    let data = await dbContext.Notes.find(listId);
    if (!data) {
      throw new BadRequest("Invalid Id or you do not own this board");
    }
    return data;
  }

  edit(id, email, body) {
    throw new Error("Method not implemented.");
  }
  create(body) {
    throw new Error("Method not implemented.");
  }

  async findById(id, creatorEmail) {
    let note = await dbContext.Notes.findById(id);
    if (!note) {
      throw new BadRequest("Invalid Id");
    }
    return note;
  }
}

export const notesService = new NotesService();
