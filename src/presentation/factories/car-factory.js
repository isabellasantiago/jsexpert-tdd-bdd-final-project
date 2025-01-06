const makeCarServiceRent = () => {
  const carsDatabase = join(__dirname, "./../../database", "cars.json");
  const CarService = require("../../../src/service/carService");
  const carService = new CarService({
    cars: carsDatabase,
  });

  return carService.rent;
};

module.exports = makeCarServiceRent;
