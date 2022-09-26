import { appState } from "../AppState.js";
import { Post } from "../Models/Post.js";
import { server } from "../Services/AxiosService.js";

class PostsService {
  async getComments(id) {
    const res = await server.get(`api/posts/${id}/comments`);
    console.log(res.data);
    appState.posts = res.data.map((c) => new Post(c));
  }
  setActivePost(id) {
    const post = appState.posts.find((p) => p.id == id);
    if (!post) {
      throw new Error("Invalid Post Id");
    }
    appState.activePost = post;
  }
  async createPost(formData) {
    const res = await server.post("api/posts", formData);
    console.log(res.data);
    appState.posts = [...appState.posts, new Post(res.data)];
  }

  async getPosts() {
    const res = await server.get("api/posts");
    console.log(res.data);
    appState.posts = res.data.map((p) => new Post(p));
  }
}

export const postsService = new PostsService();
