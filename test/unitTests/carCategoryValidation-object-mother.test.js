const { expect } = require("chai");
const { it, describe } = require("mocha");
const { carCategoryValidator } = require("../../src/validators/carCategory");
const CarCategoryObjectMother = require("../model/carCategoryObjectMother");

describe("Test CarCategory Object Mother", () => {
  it("shouldn't return error with valid carCategory", () => {
    const carCategory = CarCategoryObjectMother.valid();

    const result = carCategoryValidator(carCategory);
    const expected = {
      errors: [],
      result: true,
    };

    expect(result).to.be.deep.equal(expected);
  });

  describe("CarCategory Object Mother Validation Rules", () => {
    it("should return an object error when creating a carCategory with invalid id", () => {
      const carCategory = CarCategoryObjectMother.withInvalidId();

      const result = carCategoryValidator(carCategory);
      const expected = {
        errors: ["id: invalid value, current [1] expected to be uuid"],
        result: false,
      };

      expect(result).to.be.deep.equal(expected);
    });

    it("should return an object error when creating a carCategory with invalid carIds", () => {
      const carCategory = CarCategoryObjectMother.withInvalidCarIds();

      const result = carCategoryValidator(carCategory);
      const expected = {
        errors: [
          "carIds: invalid value, current [invalid-uui] expected to be array of uuids",
        ],
        result: false,
      };

      expect(result).to.be.deep.equal(expected);
    });

    it("should return an object error when creating a carCategory with invalid price", () => {
      const carCategory = CarCategoryObjectMother.withInvalidPrice();

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
