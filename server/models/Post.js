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

PostSchema.virtual("votes", {
  localField: "_id",
  foreignField: "postId",
  count: true,
  ref: "Vote",
});

PostSchema.virtual("comments", {
  localField: "_id",
  foreignField: "postId",
  ref: "Comment",
});
