const Customer = require("../../src/entities/customer");

class CustomerDataBuilder {
  constructor() {
    this.customerData = {
      id: "e6a4368e-62bd-4b78-a9c8-4320e71e14c4",
      name: "John",
      age: 21,
    };
  }

  static aCustomer() {
    return new CustomerDataBuilder();
  }

  withInvalidId() {
    this.customerData.id = 1;
    return this;
  }

  withInvalidName() {
    this.customerData.name = "";
    return this;
  }

  withInvalidAge(){
    this.customerData.age = 17;
    return this;
  }

  build() {
    const customer = new Customer(this.customerData);
    return customer;
  }
}

module.exports = CustomerDataBuilder;
