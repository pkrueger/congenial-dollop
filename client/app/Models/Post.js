export class Post {
  constructor(data) {
    this.id = data.id;
    this.name = data.memer.email;

    this.memerID = data.memerId;
    this.memerPicture = data.memer.picture || "https://th.bing.com/th/id/OIP.Sr4fxChDzgG6T-SG4zCS8wHaHa?pid=ImgDet&rs=1"
    this.postImg = data.postImg;
    this.postID = data.postID; //what is this?

    this.likes = data.likes;
    this.dislikes = data.dislikes;
    this.comment = data.comment;
  }

  get MemeCardTemplate() {
    return /* HTML */ `
      <div class="col-md-3 mb-3">
        <div class="card">
          <div class="card-header bg-secondary">
            <img
              src="${this.memerPicture}"
              alt="profile cat"
              class="img-fluid cardProfilePic rounded selectable"
            />
            ${this.name}
          </div>

          <div class="card-body">
            <img src="${this.postImg}" alt="CAT" class="img-fluid meme" />
          </div>

          <div class="card-footer d-flex justify-content-between">
            <div>
              <i
                class="fa-solid fa-message selectable"
                data-bs-toggle="modal"
                data-bs-target="#commentsModal"
                onclick="app.postsController.setActivePost('${this.id}')"
              ></i>
            </div>
            <div class="d-flex gap-5">
              <div>
                <i class="fa-solid fa-arrow-up selectable"> </i>
                <span class="text-green">${this.likes}</span>
              </div>

              <div>
                <i class="fa-solid fa-arrow-down selectable"> </i>
                <span class="text-red">${this.dislikes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  get commentsSectionTemplate() {
    return /* HTML */ `
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- SECTION: comments section title -->
          <div class="modal-header">
            <h5 class="modal-title" id="commentModalToggleLabel">
              Comments Section
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <!-- SECTION: modal body -->
          <div class="modal-body row d-flex justify-content-between">
            <div class="row" id="comments">
              <div class="col-md-8">
                <!-- ANCHOR: big meme -->
                <img src="${this.postImg}" alt="doggo" class="img-fluid" />
              </div>

              <!-- ANCHOR: comments half -->
              <div class="col-md-4">
                <img
                  src="${this.memerID}"
                  alt="Skateboarding dude"
                  class="commentSectionProfile img-fluid rounded"
                />

                <strong>${this.name}</strong>

                <!-- SECTION: comments half body -->
                <div class="row d-flex justify-content-between mt-5">
                  <div class="col-md-4">meme title...</div>
                  <div class="col-md-4">
                    <i class="fa-solid fa-arrow-down selectable"></i> ${this
        .dislikes}
                  </div>
                  <div class="col-md-4">
                    <i class="fa-solid fa-arrow-up selectable"></i> ${this
        .likes}
                  </div>
                </div>

                <!-- SECTION: comments half form -->
                <div class="card bg-secondary container-fluid mt-5">
                  <div class="card-body">
                    <form
                      onsubmit="app.commentsSectionController.handleSubmit()"
                    >
                      <!-- comments -->
                      <div id="row">
                        <div
                          class="d-flex bg-light allComments elevation-4 rounded p-2"
                        >
                          <div class="col-md-3">
                            <img
                              src="https://images.unsplash.com/photo-1523287409476-a9e70a25af3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
                              alt="Skateboarding dude"
                              class="commenter-pic img-fluid rounded"
                            />
                          </div>

                          <div class="col-md-8">
                            <h4><strong>${this.name}</strong></h4>
                            <p>${this.comment}</p>
                          </div>
                        </div>
                      </div>

                      <!-- add comment + button -->
                      <div
                        class="form-group d-flex justify-content-between border-bottom border-2 mt-5"
                      >
                        <input
                          type="text"
                          name="description"
                          placeholder="Add Comment..."
                        />
                        <button class="btn" type="submit">
                          <i class="mdi mdi-plus"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- SECTION: modal button -->
          <div class="modal-footer">
            <button
              class="btn btn-primary"
              data-bs-target="#commentModalToggle2"
              data-bs-toggle="modal"
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

// onclick = "app.commentsSectionController.drawTheComments()";
