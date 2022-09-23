import { appState } from "../AppState.js";
import { Post } from "../Models/Post.js";
import { server } from "../Services/AxiosService.js";

class PostsService {
  async createPost(formData) {
    console.log("Hello");
    const res = await server.post("api/posts", formData);
    console.log(res.data);
    appState.posts = [...appState.posts, new Post(res.data)];
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
