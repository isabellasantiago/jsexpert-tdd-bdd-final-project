const CarDataBuilder = require("./carDataBuilder");

class CarObjectMother {
  static valid() {
    return CarDataBuilder.aCar().build();
  }

  static withInvalidId() {
    return CarDataBuilder.aCar().withInvalidId().build();
  }

  static withInvalidName() {
    return CarDataBuilder.aCar().withInvalidName().build();
  }

  static withInvalidReleaseYear() {
    return CarDataBuilder.aCar().withInvalidReleaseYear().build();
  }

  static withInvalidAvailable() {
    return CarDataBuilder.aCar().withInvalidAvailable().build();
  }

  static withInvalidGasAvailable() {
    return CarDataBuilder.aCar().withInvalidGasAvailable().build();
  }
}

module.exports = CarObjectMother;