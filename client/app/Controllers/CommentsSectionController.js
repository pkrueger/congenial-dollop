import { appState } from "../AppState.js";
import { commentsSectionService } from "../Services/CommentsSectionService.js";
import { setHTML } from "../Utils/Writer.js";

function drawTheComments() {
  let template = "";
  appState.commentsSection.forEach((c) => (template += c.commentTemplate));
}

// drawTheComments()

export class CommentsSectionController {
  constructor() {
    drawTheComments();
  }

  async getComments() {
    try {
      await commentsSectionService.getComments();
    } catch (error) {
      console.error(error);
    }
  }
}
