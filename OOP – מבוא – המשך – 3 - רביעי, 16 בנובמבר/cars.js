export class Cars {
  constructor() {
    this.cars = [];
  }
  addCar(car) {
    this.cars.push(car);
  }
  printAllMyCars() {
    this.cars.forEach((car) => {
      car.printSpecs();
      console.log("");
    });
  }
}
