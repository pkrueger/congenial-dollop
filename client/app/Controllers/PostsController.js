import { appState } from "../AppState.js";
import { commentsSectionService } from "../Services/CommentsSectionService.js";
import { postsService } from "../Services/PostsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawPosts() {
  let template = "";
  appState.posts.forEach((p) => (template += p.MemeCardTemplate));
  setHTML("memeCard", template);
}

function _drawActivePost() {
  if (!appState.activePost) {
    return;
  }
  setHTML("active-post-details", appState.activePost.commentsSectionTemplate);
}

export class PostsController {
  constructor() {
    this.getPosts();
    appState.on("posts", _drawPosts);
    appState.on("activePost", _drawActivePost);
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

  async setActivePost(id) {
    try {
      postsService.setActivePost(id);
      await commentsSectionService.getComments(id);
    } catch (error) {
      console.error("setActivePost", error);
      Pop.error(error);
    }
  }
}
