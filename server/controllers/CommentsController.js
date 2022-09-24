import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";
import BaseController from "../utils/BaseController.js";

export class CommentsController extends BaseController {
  constructor() {
    super("api/comments");
    this.router
      .get("/:postId", this.getCommentsByPost)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.addComment)
      .delete("/:commentId", this.removeComment);
  }

  async getCommentsByPost(req, res, next) {
    try {
      const comments = await commentsService.getCommentsByPost(
        req.params.postId
      );
      res.send(comments);
    } catch (error) {
      next(error);
    }
  }

  async addComment(req, res, next) {
    try {
      req.body.memerId = req.userInfo.id;
      const comment = await commentsService.addComment(req.body);
      res.send(comment);
    } catch (error) {
      next(error);
    }
  }

  async removeComment(req, res, next) {
    try {
      req.body.memerId = req.userInfo.id;
      await commentsService.removeComment(
        req.params.commentId,
        req.body.memerId
      );
      res.send("Removed comment");
    } catch (error) {
      next(error);
    }
  }
}
