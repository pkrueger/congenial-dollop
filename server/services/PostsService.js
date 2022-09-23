import { dbContext } from "../db/DbContext.js";

class PostsService {
  async getPosts() {
    const posts = dbContext.Post.find();
    return posts;
  }

  addPost(data) {
    const post = dbContext.Post.create(data);
    return post;
  }
}

export const postsService = new PostsService();
