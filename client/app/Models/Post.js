import { appState } from "../AppState.js";

export class Post {
  constructor(data) {
    this.id = data.id;
    this.name = data.memer.email;

    this.memerID = data.memerId;

    this.postImg = data.postImg;
    this.postID = data.postID; //what is this?

    this.likes = data.likes;
    this.dislikes = data.dislikes;
    this.comment = data.comment;
  }

  get MemeCardTemplate() {
    return /* HTML */ `
      <div class="col-md-3 mb-3">
        <div class="card elevation-1">
          <div class="card-header bg-secondary">
            <img
              src="${this.postImg}"
              alt="profile cat"
              class="img-fluid cardProfilePic rounded selectable"
            />
            <strong>${this.name}</strong>
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
      <div class="modal-dialog modal-dialog-centered h-100">
        <div class="modal-content h-100">
          <!-- SECTION: comments section title -->
          <div class="modal-header h-100">
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
          <div class="container-fluid bg-secondary">
            <div class="row" id="comments">
              <div class="col-md-8 text-center">
                <!-- ANCHOR: big meme -->
                <img src="${this.postImg}" alt="doggo" class="img-fluid" />
              </div>

              <!-- ANCHOR: comments half -->
              <div class="col-md-4 pt-4 px-4">
                <div class="w-100 text-center">
                  <u>Meme Poster:</u>
                  <strong> ${this.name}</strong>
                </div>

                <!-- SECTION: comments half body -->
                <div class="row d-flex justify-content-center mt-4">
                  <div class="col-md-4 text-center">
                    <i class="fa-solid fa-arrow-down selectable text-red"></i>
                    ${this.dislikes}
                  </div>
                  <div class="col-md-4 text-center">
                    <i class="fa-solid fa-arrow-up selectable text-green"></i>
                    ${this.likes}
                  </div>
                </div>

                <!-- SECTION: comments half form -->
                <div class="card bg-light container-fluid mt-4 elevation-1">
                  <div class="card-body">
                    <form
                      onsubmit="app.commentsSectionController.handleSubmit()"
                      class=""
                    >
                      <h6>Comments</h6>
                      <!-- comments -->
                      <div class="">
                        <h6>${this.Comments}</h6>
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

  get Comments() {
    let template = "";
    let comment = appState.commentsSection.forEach(
      (i) => (template += i.commentTemplate)
    );
    console.log(comment);
    return template;
  }
}

// onclick = "app.commentsSectionController.drawTheComments()";
