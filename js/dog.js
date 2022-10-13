export class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHTML() {
    const { name, avatar, bio, hasBeenLiked, hasBeenSwiped } = this;
    let urlDog = this.avatar;
    document.getElementById("profile").style.backgroundImage =
      "url(" + urlDog + ")";
    document.getElementById("name").innerText = this.name;
    document.getElementById("bio").innerHTML = this.bio;
    document.getElementById("likeStamp").style.opacity = 0;
    document.getElementById("swipStamp").style.opacity = 0;
  }

  likeDog() {
    this.hasBeenLiked = true;
    document.getElementById("likeStamp").style.opacity = 1;
  }

  swipDog() {
    this.hasBeenSwiped = true;
    document.getElementById("swipStamp").style.opacity = 1;
  }
}
