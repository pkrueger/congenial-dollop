export class CommentSection {
  constructor(data) {
    this.id = data.id;
    this.postImg = data.postImg;
    this.name = data.memer.email;

    // this.memerImg = data.memer.picture;
    // this.memerName = data.memer.name;
    this.memerID = data.memerId;

    this.postID = data.postID;
    this.comment = data.comment;

    this.likes = data.likes;
    this.dislikes = data.dislikes;
  }

  get commentTemplate() {
    return /*html*/ `
      <div class="mb-3">
        <div class="d-flex bg-light allComments elevation-4 rounded p-2 w-100">
          <div class="col-md-3">
            <img
              src="https://images.unsplash.com/photo-1523287409476-a9e70a25af3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
              alt="Skateboarding dude"
              class="commenter-pic img-fluid rounded"
            />
          </div>
          <div class="col-md-8"><p>${this.comment}</p></div>
        </div>
      </div>
    `;
  }
}
