import { Post } from "../Models/Post.js";
import { server } from "./AxiosService.js";



class VotesService {
  async getVotes() {
    const res = await server.get('api/posts')
  }
}


export const votesService = new VotesService()