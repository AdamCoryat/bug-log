import express from "express";
import BaseController from "../utils/BaseController";
import { bugsService } from "../services/BugsService";
import auth0Provider from "@bcwdev/auth0provider";
import { notesService } from "../services/NotesService";

export class BugsController extends BaseController {
  constructor() {
    super("api/bugs");
    this.router
      .get("", this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0Provider.getAuthorizedUserInfo)
      .get("/:id", this.getById)
      .get("/:id/notes", this.getNotesByBugId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
      let data = await bugsService.findAll(req.query);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      req.body.creator = req.user.email;
      let data = await bugsService.findById(req.params.id, req.user.email);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getNotesByBugId(req, res, next) {
    try {
      req.body.creator = req.user.email;
      let id = req.params.id;
      let data = await notesService.getNotesByBugId({ bugId: id });
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      req.body.creatorEmail = req.user.email;
      let data = await bugsService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      if (req.body.closed == false) {
        let data = await bugsService.edit(
          req.params.id,
          req.user.email,
          req.body
        );
        res.send(data);
      }
      return res.send("Bug has been closed");
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      req.body.creatorEmail = req.user.email;
      await bugsService.softDelete(req.parmas.id, req.user.email);
      res.send("Successfully Closed!");
    } catch (error) {
      next(error);
    }
  }
}
