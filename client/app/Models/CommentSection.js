export class CommentSection {
  constructor(data) {
    this.id = data.id
    this.postImg = data.postImg
    this
  }




  get commentsSectionTemplate() {
    return /* HTML */ `
    <div class="modal-dialog modal-fullscreen-sm-down">
      comments section
    </div>
    `
  }
}