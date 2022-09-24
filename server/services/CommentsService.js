import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";

class CommentsService {
  async getCommentsByPost(postId) {
    const comments = await dbContext.Comments.find({ postId })
      .populate("memer", "name picture")
      .populate("likes")
      .populate("dislikes");
    return comments;
  }

  async getCommentById(commentId) {
    const comment = await dbContext.Comments.findById(commentId);
    if (!comment) {
      throw new BadRequest("no");
    }
    return comment;
  }

  async addComment(data) {
    const comment = await dbContext.Comments.create(data);
    comment.populate("memer", "name picture");
    return comment;
  }

  async removeComment(commentId, memerId) {
    const comment = await this.getCommentById(commentId);

    if (comment.memerId != memerId) {
      throw new Forbidden("Wrong");
    }

    await dbContext.Comments.remove(comment);
  }
}

export const commentsService = new CommentsService();
