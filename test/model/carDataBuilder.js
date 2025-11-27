const Car = require("../../src/entities/car");

class CarDataBuilder {
  constructor() {
    this.carData = {
      id: "292358fe-c475-4626-9342-ee258f95da0e",
      name: "Prius",
      releaseYear: 2024,
      available: true,
      gasAvailable: true,
    };
  }

  static aCar() {
    return new CarDataBuilder();
  }

  withInvalidId() {
    this.carData.id = 1;
  }

  withInvalidName() {
    this.carData.name = "";
  }

  withInvalidReleaseYear() {
    this.carData.releaseYear = 2030;
  }

  withInvalidAvailable() {
    this.carData.available = 'invalid';
  }

  withInvalidGasAvailable(){
    this.carData.gasAvailable = 'no';
  }

  build() {
    const car = new Car(this.carData);

    return car;
  }
}

module.exports = CarDataBuilder;
