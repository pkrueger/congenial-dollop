import { appState } from "../AppState.js";
import { Post } from "../Models/Post.js";
import { server } from "../Services/AxiosService.js";

class PostsService {
  createPost() {
    throw new Error("Method not implemented.");
  }
  async getPosts() {
    console.log("got here too");
    const res = await server.get("api/posts");
    console.log(res.data);
    appState.posts = res.data.map((p) => new Post(p));
    console.log(appState.posts);
  }
}

export const postsService = new PostsService();
