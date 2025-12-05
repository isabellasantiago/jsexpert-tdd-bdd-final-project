/*
 * Id: should be uuid
 * Name: should be string and not empty
 * CarIds: should be array of uuids
 * Price: should be number and should'nt be more than a thousand
 */

const { validateUUID } = require("../functions/uui-validator");

function carCategoryValidator(carCategory) {
  const errors = [];

  if (!validateUUID(carCategory.id)) {
    errors.push(
      `id: invalid value, current [${carCategory.id}] expected to be uuid`
    );
  }

  if (
    !(
      typeof carCategory.name === "string" &&
      carCategory.name.length > 0 &&
      !/\s/.test(carCategory.name)
    )
  ) {
    errors.push(
      `name: invalid value, current [${carCategory.name}] expected to have only words and not be empty`
    );
  }

  if (
    !Array.isArray(carCategory.carIds) ||
    !carCategory.carIds.every((id) => validateUUID(id))
  ) {
    errors.push(
      `carIds: invalid value, current [${carCategory.carIds}] expected to be array of uuids`
    );
  }

  if (typeof carCategory.price !== "number" || carCategory.price > 1000) {
    errors.push(
      `price: invalid value, current [${carCategory.price}] expected to be number and should'nt be more than a thousand`
    );
  }

  return {
    result: errors.length === 0,
    errors,
  };
}

module.exports = { carCategoryValidator };
