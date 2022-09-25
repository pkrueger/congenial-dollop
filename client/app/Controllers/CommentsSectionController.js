import { appState } from "../AppState.js";
import { commentsSectionService } from "../Services/CommentsSectionService.js";
import { setHTML } from "../Utils/Writer.js";

function drawTheComments() {
  let template = "";
  appState.commentsSection.forEach((c) => (template += c.commentTemplate));
  setHTML("comments", template);
  console.log("comments template: ");
}

// drawTheComments()

export class CommentsSectionController {
  constructor() {
    appState.on("commentsSection", drawTheComments);
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
