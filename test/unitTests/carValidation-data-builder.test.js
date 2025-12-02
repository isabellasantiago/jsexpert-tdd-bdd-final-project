const { expect } = require("chai");
const { it, describe } = require("mocha");
const { carValidator } = require("../../src/validators/car");
const CarDataBuilder = require("../model/carDataBuilder");

describe("Test Car Data Builder", () => {
  it("shouldn't return error with valid car", () => {
    const car = CarDataBuilder.aCar().build();

    const result = carValidator(car);
    const expected = {
      errors: [],
      result: true,
    };

    expect(result).to.be.deep.equal(expected);
  });

  describe("Car Validation Rules", () => {
    it("should return an object error when creating a car with invalid id", () => {
      const car = CarDataBuilder.aCar().withInvalidId().build();

      const result = carValidator(car);
      const expected = {
        errors: ["id: invalid value, current [1] expected to be uuid"],
        result: false,
      };

      expect(result).to.be.deep.equal(expected);
    });

    it("should return an object error when creating a car with invalid name", () => {
      const car = CarDataBuilder.aCar().withInvalidName().build();

      const result = carValidator(car);
      const expected = {
        errors: [
          "name: invalid value, current [] expected to have only words and not be empty",
        ],
        result: false,
      };

      expect(result).to.be.deep.equal(expected);
    });

    it("should return an object error when creating a car with invalid release year", () => {
      const car = CarDataBuilder.aCar().withInvalidReleaseYear().build();

      const result = carValidator(car);
      const expected = {
        errors: [
          "releaseYear: invalid value, current [2030] expected to be number and less or equal than current year",
        ],
        result: false,
      };

      expect(result).to.be.deep.equal(expected);
    });

    it("should return an object error when creating a car with invalid available", () => {
      const car = CarDataBuilder.aCar().withInvalidAvailable().build();

      const result = carValidator(car);
      const expected = {
        errors: [
          "available: invalid value, current [invalid] expected to be boolean",
        ],
        result: false,
      };

      expect(result).to.be.deep.equal(expected);
    });

    it("should return an object error when creating a car with invalid gas available", () => {
      const car = CarDataBuilder.aCar().withInvalidGasAvailable().build();

      const result = carValidator(car);
      const expected = {
        errors: [
          "gasAvailable: invalid value, current [no] expected to be boolean",
        ],
        result: false,
      };

      expect(result).to.be.deep.equal(expected);
    });
  });
});
