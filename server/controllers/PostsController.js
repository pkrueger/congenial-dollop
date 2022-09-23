import { Auth0Provider } from "@bcwdev/auth0provider";
import { postsService } from "../services/PostsService.js";
import BaseController from "../utils/BaseController.js";

export class PostsController extends BaseController {
  constructor() {
    super("api/posts");
    this.router
      .get("", this.getPosts)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.addPost);
  }
  async getPosts(req, res, next) {
    try {
      const posts = await postsService.getPosts();
      res.send(posts);
    } catch (error) {
      next(error);
    }
  }

  async addPost(req, res, next) {
    try {
      req.body.memerId = req.userInfo.id;
      const post = await postsService.addPost(req.body);
      res.send(post);
    } catch (error) {
      next(error);
    }
  }
}
