import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentVotesService } from "../services/CommentVotesService.js";
import BaseController from "../utils/BaseController.js";

export class CommentVotesController extends BaseController {
  constructor() {
    super("api/votes/:commentId");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("/likes", this.addLike)
      .post("/dislikes", this.addDislike)
      .delete("/likes", this.deleteLike)
      .delete("/dislikes", this.deleteDislike)
      .get("/likes", this.getLikes)
      .get("/dislikes", this.getDislikes);
  }
  async deleteDislike(req, res, next) {
    try {
      const dislikes = await commentVotesService.deleteDislike(
        req.params,
        req.userInfo
      );
      res.send("Dislike Removed");
    } catch (error) {
      next(error);
    }
  }
  async getLikes(req, res, next) {
    try {
      const likes = await commentVotesService.getLikes(req.params.commentId);
      res.send(likes);
    } catch (error) {
      next(error);
    }
  }
  async getDislikes(req, res, next) {
    try {
      const Dislikes = await commentVotesService.getDislikes(
        req.params.commentId
      );
      res.send(Dislikes);
    } catch (error) {
      next(error);
    }
  }
  async deleteLike(req, res, next) {
    try {
      await commentVotesService.deleteLike(req.params, req.userInfo);
      res.send("Like Removed");
    } catch (error) {
      next(error);
    }
  }
  async addDislike(req, res, next) {
    try {
      req.body.memerId = req.userInfo.id;
      req.body.commentId = req.params.commentId;
      const dislike = await commentVotesService.addDislike(req.body);
      res.send(dislike);
    } catch (error) {
      next(error);
    }
  }
  async addLike(req, res, next) {
    try {
      req.body.memerId = req.userInfo.id;
      req.body.commentId = req.params.commentId;
      const like = await commentVotesService.addLike(req.body);
      res.send(like);
    } catch (error) {
      next(error);
    }
  }
}
