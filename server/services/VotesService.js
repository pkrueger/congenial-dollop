import { dbContext } from "../db/DbContext.js";

class VotesService {
  async deleteLike(params, userInfo) {

  }
  async addDislike(data) {
    const vote = dbContext.Dislike.create(data);
    return vote;
  }
  async addLike(data) {
    const vote = dbContext.Like.create(data);
    return vote;
  }



}

export const votesService = new VotesService();
