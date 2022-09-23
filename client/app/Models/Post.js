export class Post {
  constructor(data) {
    this.id = data.id;

    // this.memerImg = data.memer.picture;
    // this.memerName = data.memer.name;
    this.memerID = data.memerId;

    this.postImg = data.postImg;
    this.postID = data.postID;

    this.likes = data.likes;
    this.dislikes = data.dislikes;
  }

  get MemeCardTemplate() {
    return /* HTML */ `
      <div class="col-3">
        <div class="card">
          <div class="card-header bg-secondary">
            <img
              src="${this.postImg}"
              alt="profile cat"
              class="img-fluid cardProfilePic rounded selectable"
            />
            ${this.memerID}
          </div>

          <div class="card-body">
            <img src="${this.postImg}" alt="CAT" class="img-fluid" />
          </div>

          <div class="card-footer d-flex justify-content-between">
            <div><i class="fa-solid fa-message selectable"></i></div>
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
    `
  }
}
