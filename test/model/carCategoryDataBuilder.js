const CarCategory = require("../../src/entities/carCategory");

class CarCategoryDataBuilder {
  constructor() {
    this.carCategoryData = {
      id: "8055606a-01de-46b6-bc67-ea69477d5e61",
      name: "Economic",
      carIds: [
        "d2e380b7-75ee-4cb8-ac87-24e77e550f40",
        "38892d4a-8abc-4044-92e2-297d45be502c",
        "cf476a18-9991-4255-97ea-1e640d668715",
      ],
      price: 1000.0,
    };
  }

  static aCarCategory() {
    return new CarCategoryDataBuilder();
  }

  withInvalidId() {
    this.carCategoryData.id = 1;
    return this;
  }

  withInvalidName() {
    this.carCategoryData.name = "";
    return this;
  }

  withInvalidCarIds() {
    this.carCategoryData.carIds = ["invalid-uui"];
    return this;
  }

  withInvalidPrice() {
    this.carCategoryData.price = 1001;
    return this;
  }

  build() {
    const carCategory = new CarCategory(this.carCategoryData);

    return carCategory;
  }
}

module.exports = CarCategoryDataBuilder;
