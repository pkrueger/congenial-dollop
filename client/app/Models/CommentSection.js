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

  get commentsSectionTemplate() {
    return /* HTML */ `
      <div
        class="modal fade modal-xl"
        id="commentModal"
        aria-hidden="true"
        aria-labelledby="commentModalToggleLabel"
        tabindex="-1"
      >
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
      </div>
    `;
  }
}
