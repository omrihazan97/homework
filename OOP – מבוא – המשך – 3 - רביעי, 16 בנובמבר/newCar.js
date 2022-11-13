import { OldCar } from "./oldCar.js";

export class NewCar extends OldCar {
  constructor(manufacturer, model, color, size, soundSystem) {
    super(manufacturer, model, color, size);
    this.engine = "Electric";
    this.soundSystem = soundSystem;
  }
  printSpecs() {
    console.log(`Specifications:`);
    console.log(`Manufacturer: ${this.getManufacturer()}`);
    console.log(`Model: ${this.model}`);
    console.log(`Engine: ${this.engine}`);
    console.log(`Color: ${this.color}`);
    console.log(`Size: ${this.size}`);
    console.log(`Sound System: ${this.soundSystem}`);
  }
}
