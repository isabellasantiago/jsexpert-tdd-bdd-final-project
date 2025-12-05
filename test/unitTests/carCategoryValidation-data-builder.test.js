const { expect } = require("chai");
const { it, describe } = require("mocha");
const { carCategoryValidator } = require("../../src/validators/carCategory");
const CarCategoryDataBuilder = require("../model/carCategoryDataBuilder");

describe("Test CarCategory Data Builder", () => {
  it("shouldn't return error with valid carCategory", () => {
    const carCategory = CarCategoryDataBuilder.aCarCategory().build();

    const result = carCategoryValidator(carCategory);

    const expected = {
      errors: [],
      result: true,
    };

    expect(result).to.be.deep.equal(expected);
  });

  describe("CarCategory Validation Rules", () => {
    it("should return an object error when creating a carCategory with invalid id", () => {
      const carCategory = CarCategoryDataBuilder.aCarCategory()
        .withInvalidId()
        .build();

      const result = carCategoryValidator(carCategory);
      const expected = {
        errors: ["id: invalid value, current [1] expected to be uuid"],
        result: false,
      };

      expect(result).to.be.deep.equal(expected);
    });

    it("should return an object error when creating a carCategory with invalid carIds", () => {
      const carCategory = CarCategoryDataBuilder.aCarCategory()
        .withInvalidCarIds()
        .build();

      const result = carCategoryValidator(carCategory);
      const expected = {
        errors: [
          "carIds: invalid value, current [invalid-uui] expected to be array of uuids",
        ],
        result: false,
      };

      expect(result).to.be.deep.equal(expected);
    });

    it("should return an object error when creating a carCategory with invalid name", () => {
      const carCategory = CarCategoryDataBuilder.aCarCategory().withInvalidName().build();

      const result = carCategoryValidator(carCategory);
      const expected = {
        errors: [
          "name: invalid value, current [] expected to have only words and not be empty",
        ],
        result: false,
      };

      expect(result).to.be.deep.equal(expected);
    });

    it("should return an object error when creating a carCategory with invalid price", () => {
      const carCategory = CarCategoryDataBuilder.aCarCategory()
        .withInvalidPrice()
        .build();

      const result = carCategoryValidator(carCategory);
      const expected = {
        errors: [
          "price: invalid value, current [1001] expected to be number and should'nt be more than a thousand",
        ],
        result: false,
      };

      expect(result).to.be.deep.equal(expected);
    });
  });
});
