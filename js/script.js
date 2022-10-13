import { dogs } from "./data.js";
import { Dog } from "./dog.js";

const likeButton = document.getElementById("heart-icon");
const swipButton = document.getElementById("cross-icon");

const dogCount = dogs.length - 1;
let currentDog = 0;

const pet = new Dog(dogs[currentDog]);

pet.getDogHTML();

function nextDog() {
  if (currentDog < dogCount) {
    currentDog++;
  } else {
    currentDog = 0;
  }
  const pet = new Dog(dogs[currentDog]);
  pet.getDogHTML();
}

likeButton.addEventListener("click", function () {
  pet.likeDog();
  setTimeout(nextDog, 3000);
});

swipButton.addEventListener("click", function () {
  pet.swipDog();
  setTimeout(nextDog, 3000);
});
