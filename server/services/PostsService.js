import { dbContext } from "../db/DbContext.js";
import { UnAuthorized } from "../utils/Errors.js";

class PostsService {
  async getPost(postId) {
    const post = await dbContext.Post.findById(postId)
      .populate("likes")
      .populate("dislikes")
      .populate("memer")
    return post;
  }
  async getPosts() {
    const posts = dbContext.Post.find()
      // Can you see thisVVV
      .populate("likes")
      .populate("dislikes")
      .populate("memer")
    return posts;
  }

  addPost(data) {
    const post = dbContext.Post.create(data);
    return post;
  }

  async removePost(postId, userInfo) {
    const post = await this.getPost(postId);
    // @ts-ignore
    if (userInfo.id != post.memerId) {
      throw new UnAuthorized("Not yur meme");
    }
    await dbContext.Post.findByIdAndDelete(postId);
  }
}

export const postsService = new PostsService();
