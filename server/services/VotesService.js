import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";

class VotesService {
  async getDislikes(postId) {
    const Dislikes = await dbContext.Dislikes.find({ postId });
    return Dislikes;
  }
  async deleteDislike(params, userInfo) {
    const dislikes = await this.getDislikes(params.postId);
    const dislike = await dislikes.find((l) => l.memerId == userInfo.id);
    if (!dislike) {
      throw new BadRequest("wrong id");
    }
    await dbContext.Dislikes.findByIdAndDelete(dislike.id);
    return dislike;
  }
  async getLikes(postId) {
    const likes = await dbContext.Likes.find({ postId });
    return likes;
  }
  async deleteLike(params, userInfo) {
    const likes = await this.getLikes(params.postId);
    const like = await likes.find((l) => l.memerId == userInfo.id);
    if (!like) {
      throw new BadRequest("wrong id");
    }
    await dbContext.Likes.findByIdAndDelete(like.id);
    return like;
  }
  async addDislike(data) {
    const dislikes = await this.getDislikes(data.postId);
    const dislike = await dislikes.find((d) => d.memerId == data.memerId);
    if (dislike) {
      return;
    }
    const vote = dbContext.Dislikes.create(data);
    return vote;
  }
  async addLike(data) {
    const likes = await this.getLikes(data.postId);
    const like = await likes.find((d) => d.memerId == data.memerId);
    if (like) {
      return;
    }
    const vote = dbContext.Likes.create(data);
    return vote;
  }
}

export const votesService = new VotesService();
