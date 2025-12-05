const CarCategoryDataBuilder = require("./carCategoryDataBuilder");

class CarCategoryObjectMother {
  static valid() {
    return CarCategoryDataBuilder.aCarCategory().build();
  }

  static withInvalidId() {
    return CarCategoryDataBuilder.aCarCategory().withInvalidId().build();
  }

  static withInvalidCarIds() {
    return CarCategoryDataBuilder.aCarCategory().withInvalidCarIds().build();
  }

  static withInvalidPrice() {
    return CarCategoryDataBuilder.aCarCategory().withInvalidPrice().build();
  }
}

module.exports = CarCategoryObjectMother;
