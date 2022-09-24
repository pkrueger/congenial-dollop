import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";
import { postsService } from "../services/PostsService.js";
import BaseController from "../utils/BaseController.js";

export class PostsController extends BaseController {
  constructor() {
    super("api/posts");
    this.router
      .get("", this.getPosts)
      .get("/:postId", this.getPost)
      .get("/:postId/comments", this.getCommentsByPost)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.addPost)
      .delete("/:postId", this.removePost);
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
  async getPost(req, res, next) {
    try {
      const post = await postsService.getPost(req.params.postId);
      res.send(post);
    } catch (error) {
      next(error);
    }
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

  async removePost(req, res, next) {
    try {
      await postsService.removePost(req.params.postId, req.userInfo);
      res.send("deleted");
    } catch (error) {
      next(error);
    }
  }
}
