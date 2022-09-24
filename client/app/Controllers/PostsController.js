import { appState } from "../AppState.js";
import { postsService } from "../Services/PostsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPosts() {
  let template = "";
  appState.posts.forEach((p) => (template += p.MemeCardTemplate));
  setHTML("memeCard", template);
}

export class PostsController {
  constructor() {
    this.getPosts();
    appState.on("posts", _drawPosts);
  }

  async getPosts() {
    try {
      await postsService.getPosts();
    } catch (error) {
      console.error(error);
    }
  }

  async createPost() {
    try {
      // @ts-ignore
      window.event.preventDefault();
      // @ts-ignore
      const form = window.event.target;
      const formData = getFormData(form);
      console.log("Data coming in");
      await postsService.createPost(formData);
      // @ts-ignore
      form.reset();
    } catch (error) {
      console.error(error);
    }
  }
}
