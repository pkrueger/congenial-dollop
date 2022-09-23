import mongoose from "mongoose";
import { AccountSchema } from "../models/Account";
import { PostSchema } from "../models/Post.js";

class DbContext {
  Account = mongoose.model("Account", AccountSchema);
  Post = mongoose.model("Post", PostSchema);
}

export const dbContext = new DbContext();
