import { appState } from "../AppState.js";
import { commentsSectionService } from "../Services/CommentsSectionService.js";



function drawComments() {
  let template = ''
  appState.commentsSection.forEach((c) => template += c.commentsSectionTemplate)

}


// drawTheComments()


export class CommentsSectionController {
  constructor() {

  }




}