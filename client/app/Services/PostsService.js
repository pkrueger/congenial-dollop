import { server } from "../Services/AxiosService.js";

class PostsService {
  async getPosts() {
    console.log("got here too");
    const res = await server.get("api/posts");
    console.log(res.data);
  }
}

export const postsService = new PostsService();
