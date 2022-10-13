import { dogs } from "./data.js";
import { Dog } from "./dog.js";

let index = 2;

const perrito = new Dog(dogs[index]);

perrito.getDogHTML();
