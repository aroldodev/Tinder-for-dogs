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
  }

  likeDog() {
    this.hasBeenLiked = true;
  }

  swipDog() {
    this.hasBeenSwiped = true;
  }
}
