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
    return this;
  }

  withInvalidName() {
    this.carData.name = "";
    return this;
  }

  withInvalidReleaseYear() {
    this.carData.releaseYear = 2030;
    return this;
  }

  withInvalidAvailable() {
    this.carData.available = "invalid";
    return this;
  }

  withInvalidGasAvailable() {
    this.carData.gasAvailable = "no";
    return this;
  }

  build() {
    const car = new Car(this.carData);

    return car;
  }
}

module.exports = CarDataBuilder;
