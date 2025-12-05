const { expect } = require("chai");
const { it, describe } = require("mocha");
const { customerValidator } = require("../../src/validators/customer");
const CustomerObjectMother = require("../model/customerObjectMother");

describe("Test Customer Object Mother", () => {
  it("shouldn't return error with valid customer", () => {
    const customer = CustomerObjectMother.valid();

    const result = customerValidator(customer);

    const expected = {
      errors: [],
      result: true,
    };

    expect(result).to.be.deep.equal(expected);
  });

  describe("Customer Validation Rules", () => {
    it("should return an object error when creating a customer with invalid id", () => {
      const customer = CustomerObjectMother.withInvalidId();

      const result = customerValidator(customer);
      const expected = {
        errors: ["id: invalid value, current [1] expected to be uuid"],
        result: false,
      };

      expect(result).to.be.deep.equal(expected);
    });

    it("should return an object error when creating a customer with invalid name", () => {
      const customer = CustomerObjectMother.withInvalidName();

      const result = customerValidator(customer);
      const expected = {
        errors: [
          "name: invalid value, current [] expected to have only words, no spaces and not be empty",
        ],
        result: false,
      };

      expect(result).to.be.deep.equal(expected);
    });

    it("should return an object error when creating a customer with invalid age", () => {
      const customer = CustomerObjectMother.withInvalidAge();

      const result = customerValidator(customer);
      const expected = {
        errors: [
          "age: invalid value, current [17] expected to be number and between 18 and 120",
        ],
        result: false,
      };

      expect(result).to.be.deep.equal(expected);
    });
  });
});
