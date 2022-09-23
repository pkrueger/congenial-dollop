import { appState } from "../AppState.js";
import { postsService } from "../Services/PostsService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPosts() {
  let template = "";
  appState.posts.forEach((p) => (template += p.MemeCardTemplate));
  setHTML("memeCard", template);
  console.log("trying to draw");
}
export class PostsController {
  constructor() {
    this.getPosts();
    appState.on("posts", _drawPosts);
  }

  async getPosts() {
    try {
      console.log("Got here");
      await postsService.getPosts();
    } catch (error) {
      console.error(error);
    }
  }

  async createPost(formData) {
    try {
      await postsService.createPost(formData);
    } catch (error) {
      console.error(error);
    }
  }
}
