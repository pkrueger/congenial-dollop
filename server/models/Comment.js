import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId;

export const CommentSchema = new Schema(
  {
    memerId: { type: ObjectId, required: true, ref: "Account" },
    postId: { type: ObjectId, required: true, ref: "Post" },
    comment: { type: String, required: true, maxlength: 300 },
  },
  {
    timestamps: true,
  }
);

CommentSchema.virtual("memer", {
  localField: "memerId",
  foreignField: "_id",
  justOne: true,
  ref: "Account",
});

CommentSchema.virtual("likes", {
  localField: "_id",
  foreignField: "commentId",
  count: true,
  ref: "CommentLike",
});

CommentSchema.virtual("dislikes", {
  localField: "_id",
  foreignField: "commentId",
  count: true,
  ref: "CommentDislike",
});
