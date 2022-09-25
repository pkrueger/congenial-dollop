import { appState } from "../AppState.js";
import { CommentSection } from "../Models/CommentSection.js";
import { Post } from "../Models/Post.js";
import { server } from "./AxiosService.js";

class CommentsSectionService {
  async getComments(id) {
    const res = await server.get(`api/posts/${id}/comments`);

    appState.commentsSection = res.data.map((c) => new CommentSection(c));
  }
}

export const commentsSectionService = new CommentsSectionService();
