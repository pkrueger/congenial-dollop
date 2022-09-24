import { AuthController } from "./Controllers/AuthController.js";
import { PostsController } from "./Controllers/PostsController.js";
import { CommentsSectionController } from "./Controllers/CommentsSectionController.js";

class App {
  authController = new AuthController();
  postsController = new PostsController();
  commentsSectioncontroller = new CommentsSectionController();
}

// @ts-ignore
window.app = new App();
