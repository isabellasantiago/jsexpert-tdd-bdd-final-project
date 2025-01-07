const { describe, it, before, after } = require("mocha");
const supertest = require("supertest");
const { expect } = require("chai");

describe("API Suite Test - E2E", () => {
  let app;
  before((done) => {
    app = require("../../src/presentation/api");
    app.once("listening", done());
  });

  after((done) => app.close(done));

  describe("/rent:post", () => {
    it("should throw 400 if no data provided", async () => {
      const response = await supertest(app).post("/rent").send({}).expect(400);

      expect(response.text).to.equal("No request data was provided");
    });

    it("should throw 400 and list the param names when missing", async () => {
      const response = await supertest(app)
        .post("/rent")
        .send({ customer: {} })
        .expect(400);

      expect(response.badRequest).to.be.true;
      expect(response.text).to.equal(
        "Missing params: carCategory, numberOfDays"
      );
    });

    it("should return 200 and an object with properties: customer, dueDate, car, amount", async () => {
      const request = JSON.parse(`{
        "customer": {
        "id": "ccfb9b26-ee16-472f-9784-4ec844672244",
        "name": "Forrest Swaniawski",
        "age": 36
    },
    "carCategory": {
        "id": "c01f4664-8b3a-43d9-bf2b-d20bac09db5b",
        "name": "Minivan",
        "carIds": [
            "292358fe-c475-4626-9342-ee258f95da0e",
            "f2926ad8-8aa2-4e04-aec6-e67eebe467c3",
            "6032081a-eb2d-453d-920e-7a13ee53c8ac"
        ],
        "price": 34.97
    },
    "numberOfDays": 5
        }`);
      const response = await supertest(app)
        .post("/rent")
        .send(request)
        .expect(200);

      expect(response.ok).to.be.true;
      expect(response.header["content-type"]).to.equal("application/json");
      expect(response.body).to.have.property("customer");
      expect(response.body).to.have.property("car");
      expect(response.body).to.have.property("dueDate");
      expect(response.body).to.have.property("amount");
    });
  });

  describe("/default:get", () => {
    it("should return 404 when route does not exists", async () => {
      const response = await supertest(app).get("/default").expect(404);

      expect(response.notFound).to.be.true;
      expect(response.text).to.equal("NOT FOUND");
    });
  });
});
