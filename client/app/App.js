import { AuthController } from "./Controllers/AuthController.js";
import { PostsController } from "./Controllers/PostsController.js";
import { VotesController } from "./Controllers/VotesController.js";

class App {
  authController = new AuthController();
  postsController = new PostsController();
  votescontroller = new VotesController();
}

// @ts-ignore
window.app = new App();
