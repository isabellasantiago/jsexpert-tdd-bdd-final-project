/**PARAMOS EM AJUSTAR O VALIDATOR DE CAR
 *
 * FALTA:
 * - [x] criar teste de CarDataBuilder
 * - [x] criar objectMother de Car
 * - [x] criar teste de objectMother de Car
 * - [] criar CustomerDataBuilder
 * - [] definir regra de Customer
 * - [] criar validator de Customer
 * - [] criar teste de CustomerDataBuilder
 * - [] criar objectMother de Customer
 * - [] criar teste de objectMother de Customer
 */
/*
    Id: should be uuid
    Name: should be string and not empty
    ReleaseYear: should be number and should'nt be more than current year
    Available: should be boolean
    GasAvailable: should be boolean
*/

const { validateUUID } = require("../functions/uui-validator");

function carValidator(car) {
  const errors = [];

  if (!validateUUID(car.id)) {
    errors.push(`id: invalid value, current [${car.id}] expected to be uuid`);
  }

  if (
    !(
      typeof car.name === "string" &&
      car.name.length > 0 &&
      !/\s/.test(car.name)
    )
  ) {
    errors.push(
      `name: invalid value, current [${car.name}] expected to have only words and not be empty`
    );
  }

  if (
    !(
      typeof car.releaseYear === "number" &&
      car.releaseYear <= new Date().getFullYear()
    )
  ) {
    errors.push(
      `releaseYear: invalid value, current [${car.releaseYear}] expected to be number and less or equal than current year`
    );
  }

  if (!(typeof car.available === "boolean")) {
    errors.push(
      `available: invalid value, current [${car.available}] expected to be boolean`
    );
  }

  if (!(typeof car.gasAvailable === "boolean")) {
    errors.push(
      `gasAvailable: invalid value, current [${car.gasAvailable}] expected to be boolean`
    );
  }

  return {
    result: errors.length === 0,
    errors,
  };
}

module.exports = {
  carValidator,
};
