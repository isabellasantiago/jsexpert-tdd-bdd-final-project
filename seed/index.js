const faker = require("faker");
const Car = require("../src/entities/car");
const CarCategory = require("../src/entities/carCategory");
const Customer = require("../src/entities/customer");

//normalize path
//anywhere its running is going to take this file
const { join } = require("path");
//and outputing on "database" folder
const seederBaseFolder = join(__dirname, "../", "database");
//method to write the file
const { writeFile } = require("fs/promises");
const ITEMS_AMOUNT = 2;

const carCategory = new CarCategory({
  id: faker.random.uuid(),
  name: faker.vehicle.type(),
  carIds: [],
  price: faker.finance.amount(20, 100),
});

const cars = [];
const customers = [];
for (let index = 0; index <= ITEMS_AMOUNT; index++) {
  const car = new Car({
    id: faker.random.uuid(),
    name: faker.vehicle.model(),
    available: true,
    gasAvailable: true,
    releaseYear: faker.date.past().getFullYear(),
  });

  carCategory.carIds.push(car.id);
  cars.push(car);

  const customer = new Customer({
    id: faker.random.uuid(),
    name: faker.name.findName(),
    age: faker.random.number({ min: 18, max: 50 }),
  });

  customers.push(customer);
}

//custom method
//I want to receive the filename and the data
const write = (filename, data) =>
  //normalizing path: seederBaseFolder and pass the filename
  //also save data as string (will be a .json file)
  writeFile(join(seederBaseFolder, filename), JSON.stringify(data));

//IFE
(async () => {
  await write("cars.json", cars);
  await write("customers.json", customers);
  await write("carCategories.json", [carCategory]);
})();
