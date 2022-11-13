import { NewCar } from "./newCar.js";
import { Cars } from "./cars.js";
import { OldCar } from "./oldCar.js";

let myFord = new OldCar("Ford", "Escort", "Blue", "5 Doors");
// myFord.printSpecs();

console.log("");

let myTesla = new NewCar("Tesla", "3", "White", "4 Doors", "JBL");
// myTesla.printSpecs();

let allMyCars = new Cars();
allMyCars.addCar(myFord);
allMyCars.addCar(myTesla);

console.log(allMyCars.cars);

allMyCars.printAllMyCars();
