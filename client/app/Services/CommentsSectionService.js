import { server } from "./AxiosService.js";

class CommentsSectionService {
  async getComments(id) {
    const res = await server.get(`/api/posts/${id}/comments`);
    console.log(res.data);
  }
}

export const commentsSectionService = new CommentsSectionService();
