import { Auth0Provider } from "@bcwdev/auth0provider";
import { votesService } from "../services/VotesService.js";
import BaseController from "../utils/BaseController.js";

export class VotesController extends BaseController {
  constructor() {
    super("api/votes/:postId");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("/likes", this.addLike)
      .post("/dislikes", this.addDislike)
      .delete("/likes", this.deleteLike)
      .delete("/dislikes", this.deleteDislike)
      .get("/likes", this.getLikes)
      .get("/dislikes", this.getDislikes)
  }
  async deleteDislike(req, res, next) {
    try {
      const dislikes = await votesService.deleteDislike(req.params, req.userInfo)
      res.send("Dislike Removed")
    } catch (error) {
      next(error)
    }
  }
  async getLikes(req, res, next) {
    try {
      const likes = await votesService.getLikes(req.params.postId)
      res.send(likes)
    } catch (error) {
      next(error)
    }
  }
  async getDislikes(req, res, next) {
    try {
      const Dislikes = await votesService.getDislikes(req.params.postId)
      res.send(Dislikes)
    } catch (error) {
      next(error)
    }
  }
  async deleteLike(req, res, next) {
    try {
      const like = await votesService.deleteLike(req.params, req.userInfo)
      res.send("Like Removed")
    } catch (error) {
      next(error)
    }
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
