import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId;

export const CommentLikeSchema = new Schema(
  {
    commentId: { type: ObjectId, required: true, ref: "Comment" },
    memerId: { type: ObjectId, required: true, ref: "Account" },
  },
  {
    timestamps: true,
  }
);
