import { dbContext } from "../db/DbContext.js";

class PostsService {
  async getPost(postId) {
    const post = await dbContext.Post.findById(postId)
      .populate("likes")
      .populate("dislikes");
    return post;
  }
  async getPosts() {
    const posts = dbContext.Post.find();
    return posts;
  }

  addPost(data) {
    const post = dbContext.Post.create(data);
    return post;
  }

  removePost(data) {
    dbContext.Post.delete;
  }
}

export const postsService = new PostsService();
