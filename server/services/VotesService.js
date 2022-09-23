import { dbContext } from "../db/DbContext.js";

class VotesService {
  async getLikes(postId) {
    const likes = await dbContext.Like.find({ postId })
    return likes
  }
  async deleteLike(params, userInfo) {
    const likes = await this.getLikes(params.postId)
    const like = await likes.map(l => like == userInfo.id)
    return like;
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
