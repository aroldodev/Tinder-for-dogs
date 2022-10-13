import { dogs } from "./data.js";
import { Dog } from "./dog.js";

const likeButton = document.getElementById("heart-icon");
const swipButton = document.getElementById("cross-icon");

const dogCount = dogs.length - 1;
let currentDog = 0;

let pet = new Dog(dogs[currentDog]);

pet.getDogHTML();

function nextDog() {
  if (currentDog < dogCount) {
    currentDog++;
  } else {
    currentDog = 0;
  }
  pet = new Dog(dogs[currentDog]);
  pet.getDogHTML();
}

likeButton.addEventListener("click", function () {
  pet.likeDog();
  console.log(pet);
  setTimeout(nextDog, 3000);
});

swipButton.addEventListener("click", function () {
  pet.swipDog();
  console.log(pet);
  setTimeout(nextDog, 3000);
});
