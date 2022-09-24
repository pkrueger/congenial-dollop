import mongoose from "mongoose";
import { AccountSchema } from "../models/Account";
import { PostSchema } from "../models/Post.js";
import { LikeSchema } from "../models/Like.js";
import { DislikeSchema } from "../models/Dislike.js";
import { CommentSchema } from "../models/Comment.js";
import { CommentLikeSchema } from "../models/CommentLike.js";
import { CommentDislikeSchema } from "../models/CommentDislike.js";

class DbContext {
  Account = mongoose.model("Account", AccountSchema);
  Posts = mongoose.model("Post", PostSchema);
  Likes = mongoose.model("Like", LikeSchema);
  Dislikes = mongoose.model("Dislike", DislikeSchema);
  Comments = mongoose.model("Comment", CommentSchema);
  CommentLikes = mongoose.model("CommentLike", CommentLikeSchema);
  CommentDislikes = mongoose.model("CommentDislike", CommentDislikeSchema);
}

export const dbContext = new DbContext();
