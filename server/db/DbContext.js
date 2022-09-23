import mongoose from "mongoose";
import { AccountSchema } from "../models/Account";
import { PostSchema } from "../models/Post.js";
import { LikeSchema } from "../models/Like.js";
import { DislikeSchema } from "../models/Dislike.js";

class DbContext {
  Account = mongoose.model("Account", AccountSchema);
  Post = mongoose.model("Post", PostSchema);
  Like = mongoose.model("Like", LikeSchema);
  Dislike = mongoose.model("Dislike", DislikeSchema);
}

export const dbContext = new DbContext();
