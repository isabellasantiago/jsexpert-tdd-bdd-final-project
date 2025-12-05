const CustomerDataBuilder = require("./customerDataBuilder");

class CustomerObjectMother {
  static valid() {
    return CustomerDataBuilder.aCustomer().build();
  }

  static withInvalidId() {
    return CustomerDataBuilder.aCustomer().withInvalidId().build();
  }

  static withInvalidName() {
    return CustomerDataBuilder.aCustomer().withInvalidName().build();
  }

  static withInvalidAge() {
    return CustomerDataBuilder.aCustomer().withInvalidAge().build();
  }
}

module.exports = CustomerObjectMother;
