import { dbContext } from "../db/DbContext.js";
import { UnAuthorized } from "../utils/Errors.js";

class PostsService {
  async getPost(postId) {
    const post = await dbContext.Posts.findById(postId)
      .populate("likes")
      .populate("dislikes")
      .populate("memer")
      .populate({
        path: "comments",
        model: "Comment",
        populate: [
          {
            path: "likes",
            model: "CommentLike",
          },
          {
            path: "dislikes",
            model: "CommentDislike",
          },
          {
            path: "memer",
            model: "Account",
            select: "name picture",
          },
        ],
      });

    return post;
  }
  async getPosts() {
    const posts = dbContext.Posts.find()
      .populate("likes")
      .populate("dislikes")
      .populate("memer");
    return posts;
  }

  addPost(data) {
    const post = dbContext.Posts.create(data);
    return post;
  }

  async removePost(postId, userInfo) {
    const post = await this.getPost(postId);
    // @ts-ignore
    if (userInfo.id != post.memerId) {
      throw new UnAuthorized("Not yur meme");
    }
    await dbContext.Posts.findByIdAndDelete(postId);
  }
}

export const postsService = new PostsService();
