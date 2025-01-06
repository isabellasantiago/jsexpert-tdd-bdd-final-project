const { describe, it, before, after } = require("mocha");
const supertest = require("supertest");

describe("API Suite Test - E2E", () => {
  let app;
  before((done) => {
    app = require("../../src/presentation/api");
    app.once("listening", done);
  });

  after((done) => app.close(done));
  describe("/rent:post", async () => {
    it("should");
  });

  describe("/default:get", async () => {
    it("should return 404 when route does not exists", async () => {
      const response = await supertest(app).get("/default").expect(404);
    });
  });
});
