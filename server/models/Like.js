import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId;

export const LikeSchema = new Schema(
  {
    postId: { type: ObjectId, required: true, ref: "Post" },
    memerId: { type: ObjectId, required: true, ref: "Account" },
  },
  {
    timestamps: true,
  }
);
