import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class CommentVotesService {
  async getDislikes(commentId) {
    const dislikes = await dbContext.CommentDislikes.find({ commentId });
    return dislikes;
  }
  async deleteDislike(params, userInfo) {
    const dislikes = await this.getDislikes(params.commentId);
    const dislike = await dislikes.find((l) => l.memerId == userInfo.id);
    if (!dislike) {
      throw new BadRequest("wrong id");
    }
    await dbContext.CommentDislikes.findByIdAndDelete(dislike.id);
    return dislike;
  }
  async getLikes(commentId) {
    const likes = await dbContext.CommentLikes.find({ commentId });
    return likes;
  }
  async deleteLike(params, userInfo) {
    const likes = await this.getLikes(params.commentId);
    const like = await likes.find((l) => l.memerId == userInfo.id);
    if (!like) {
      throw new BadRequest("wrong id");
    }
    await dbContext.CommentLikes.findByIdAndDelete(like.id);
    return like;
  }
  async addDislike(data) {
    const dislikes = await this.getDislikes(data.commentId);
    const dislike = await dislikes.find((d) => d.memerId == data.memerId);
    if (dislike) {
      return;
    }
    const vote = dbContext.CommentDislikes.create(data);
    return vote;
  }
  async addLike(data) {
    const likes = await this.getLikes(data.commentId);
    const like = await likes.find((d) => d.memerId == data.memerId);
    if (like) {
      return;
    }
    const vote = dbContext.CommentLikes.create(data);
    return vote;
  }
}

export const commentVotesService = new CommentVotesService();
