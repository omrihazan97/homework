export class OldCar {
  #manufacturer;
  constructor(manufacturer, model, color, size) {
    this.#manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.engine = "Gasoline";
    this.size = size;
  }
  printSpecs() {
    console.log(`Specifications:`);
    console.log(`Manufacturer: ${this.#manufacturer}`);
    console.log(`Model: ${this.model}`);
    console.log(`Engine: ${this.engine}`);
    console.log(`Color: ${this.color}`);
    console.log(`Size: ${this.size}`);
  }
  getManufacturer() {
    return this.#manufacturer;
  }
}
