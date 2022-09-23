import { postsService } from "../Services/PostsService.js";

export class PostsController {
  constructor() {
    this.getPosts();
  }

  async getPosts() {
    try {
      console.log("Got here");
      await postsService.getPosts();
    } catch (error) {
      error.log("[ERROR]");
    }
  }
}
