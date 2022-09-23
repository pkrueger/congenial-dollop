import { Auth0Provider } from "@bcwdev/auth0provider";
import { votesService } from "../services/VotesService.js";
import BaseController from "../utils/BaseController.js";

export class VotesController extends BaseController {
  constructor() {
    super("api/posts");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("/:postId/like", this.addLike)
      .post("/:postId/dislike", this.addDislike);
  }
  addDislike(req, res, next) {
    try {
      req.body.memerId = req.userInfo.id;
      req.body.postId = req.params.postId;
      const dislike = votesService.addDislike(req.body);
      res.send(dislike);
    } catch (error) {
      next(error);
    }
  }
  async addLike(req, res, next) {
    try {
      req.body.memerId = req.userInfo.id;
      req.body.postId = req.params.postId;
      const like = votesService.addLike(req.body);
      res.send(like);
    } catch (error) {
      next(error);
    }
  }
}
