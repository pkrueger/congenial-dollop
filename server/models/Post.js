import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId;

export const PostSchema = new Schema(
  {
    postImg: { type: String, required: true, maxlength: 250 },
    memerId: { type: ObjectId, required: true, ref: "Account" },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

PostSchema.virtual("likes", {
  localField: "_id",
  foreignField: "postId",
  count: true,
  ref: "Like",
});

PostSchema.virtual("dislikes", {
  localField: "_id",
  foreignField: "postId",
  count: true,
  ref: "Dislike",
});

PostSchema.virtual("comments", {
  localField: "_id",
  foreignField: "postId",
  ref: "Comment",
});

PostSchema.virtual("memer", {
  localField: "memerId",
  foreignField: "_id",
  justOne: true,
  ref: "Account"
})
