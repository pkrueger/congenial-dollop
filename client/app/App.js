import { AuthController } from "./Controllers/AuthController.js";
import { PostsController } from "./Controllers/PostsController.js";

class App {
  authController = new AuthController();
  postsController = new PostsController();
}

// @ts-ignore
window.app = new App();
