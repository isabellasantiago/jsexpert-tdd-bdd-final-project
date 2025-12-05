/**
 * - [x] criar CustomerDataBuilder
 * - [x] definir regra de Customer
 * - [x] criar validator de Customer
 * - [x] criar teste de CustomerDataBuilder
 * - [x] criar objectMother de Customer
 * - [] criar teste de objectMother de Customer
 */

/*
 * Id should be uuid
 * Name should be only words
 * Age: should be a number more than 0 e less than 120
 */

const { validateUUID } = require("../functions/uui-validator");

function customerValidator(customer) {
  const errors = [];

  if (!validateUUID(customer.id)) {
    errors.push(
      `id: invalid value, current [${customer.id}] expected to be uuid`
    );
  }

  if (
    !(
      typeof customer.name === "string" &&
      customer.name.length > 0 &&
      !/\s/.test(customer.name)
    )
  ) {
    errors.push(
      `name: invalid value, current [${customer.name}] expected to have only words, no spaces and not be empty`
    );
  }

  if (
    !(
      typeof customer.age === "number" &&
      customer.age <= 120 &&
      customer.age >= 18
    )
  ) {
    errors.push(
      `age: invalid value, current [${customer.age}] expected to be number and between 18 and 120`
    );
  }

  return {
    errors,
    result: errors.length === 0,
  };
}

module.exports = { customerValidator };
