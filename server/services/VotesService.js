import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class VotesService {
  async getDislikes(postId) {
    const Dislikes = await dbContext.Dislike.find({ postId })
    return Dislikes
  }
  async deleteDislike(params, userInfo) {
    const dislikes = await this.getDislikes(params.postId)
    const dislike = await dislikes.find(l => l.memerId == userInfo.id)
    if (!dislike) { throw new BadRequest('wrong id') }
    await dbContext.Dislike.findByIdAndDelete(dislike.id)
    return dislike;
  }
  async getLikes(postId) {
    const likes = await dbContext.Like.find({ postId })
    return likes
  }
  async deleteLike(params, userInfo) {
    const likes = await this.getLikes(params.postId)
    const like = await likes.find(l => l.memerId == userInfo.id)
    if (!like) { throw new BadRequest('wrong id') }
    await dbContext.Like.findByIdAndDelete(like.id)
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
