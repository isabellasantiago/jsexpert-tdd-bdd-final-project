const { join } = require("path");

const makeCarService = () => {
  const carsDatabase = join(__dirname, "../../../database", "cars.json");
  const CarService = require("../../../src/service/carService");
  const carService = new CarService({
    cars: carsDatabase,
  });

  return carService;
};

module.exports = makeCarService;
