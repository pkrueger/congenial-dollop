import { server } from "./AxiosService.js";



class CommentsSectionService {
  async getComments() {
    console.log('service get comments');
  }
}


export const commentsSectionService = new CommentsSectionService()