export class Post {
  constructor(data) {
    this.id = data.id

    this.memerImg = data.memer.picture
    this.memerName = data.memer.name
    this.memerID = data.memer.id

    this.postImg = data.postImg
    this.postID = data.postID

    this.likes = data.likes
    this.dislikes = data.dislikes
  }



  get MemeCardTemplate() {
    return /* HTML */ `
    <div class="col-3">
      <div class="card">
        <div class="card-header bg-secondary">
          <img src="${this.memerImg}" alt="profile cat" class="img-fluid cardProfilePic rounded" />
          ${this.memerName}
        </div>

        <div class="card-body">
          <img src="${this.postImg}" alt="CAT" class="img-fluid" />
        </div>

        <div class="card-footer d-flex justify-content-between">
          <div><i class="fa-solid fa-message"></i></div>
          <div class="d-flex gap-5">

            <div>
            <i class="fa-solid fa-arrow-up">
            <span>${this.likes}</span>
            </i>
            </div>

            <div>
            <i class="fa-solid fa-arrow-down">
            <span>${this.dislikes}</span>
            </i>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
}