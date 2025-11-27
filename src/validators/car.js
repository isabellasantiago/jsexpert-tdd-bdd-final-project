/**PARAMOS EM AJUSTAR O VALIDATOR DE CAR
 * 
 * FALTA:
 * - [] criar teste de CarDataBuilder
 * - [] criar objectMother de Car
 * - [] criar teste de objectMother de Car
 * - [] criar categoryDataBuilder
 * - [] definir regra de Category
 * - [] criar validator de category
 * - [] criar teste de CategoryDataBuilder
 * - [] criar objectMother de Category
 * - [] criar teste de objectMother de Category
 * - [] criar CustomerDataBuilder
 * - [] definir regra de Customer
 * - [] criar validator de Customer
 * - [] criar teste de CustomerDataBuilder
 * - [] criar objectMother de Customer
 * - [] criar teste de objectMother de Customer
 */

/*
    Id: should be uuid
    Name: should be string
    ReleaseYear: should be number and should'nt be more than current year
    Available: should be boolean
    GasAvailable: should be boolean
*/
function carValidator(car) {
  const errors = [];

  if (!(car.id.length >= 2 && car.id <= 20) || car.id === "") {
    errors.push(
      `id: invalid length, current [${car.id}] expected to be between 2 and 20`
    );
  }

  if (/(\W|\d)/.test(car.name)) {
    errors.push(
      `name: invalid value, current [${car.name}] expected to have only words`
    );
  }

  if (!(car.price >= 1 && car.price <= 1000)) {
    errors.push(
      `price: invalid value, current [${car.price}] expected to be between 1 and 1000`
    );
  }

  if (!["electronic", "organic"].includes(car.category)) {
    errors.push(
      `category: invalid value, current [${car.category}] expected to be either electronic or organic`
    );
  }

  return {
    result: errors.length === 0,
    errors,
  };
}
