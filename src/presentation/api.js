const http = require("http");
const { once } = require("events");
const makeCarService = require("./factories/car-factory");

const routes = {
  "/rent:post": async (request, response) => {
    const requestData = JSON.parse(await once(request, "data"));
    const carService = makeCarService();
    const requestParameters = Object.keys(requestData);
    const neededParameters = ["customer", "carCategory", "numberOfDays"];

    if (requestParameters.length === 0) {
      response.writeHead(400);
      return response.end("No request data was provided");
    }

    if (requestParameters.length !== neededParameters.length) {
      const missingParams = neededParameters.filter((param) => {
        return requestParameters.includes(param) === false;
      });

      response.writeHead(400);
      return response.end(`Missing params: ${missingParams.join(", ")}`);
    }

    const finalResponse = await carService.rent(requestData);

    response.writeHead(200, { "Content-Type": "application/json" });

    return response.end(JSON.stringify(finalResponse));
  },
  default(_request, response) {
    response.writeHead(404);
    return response.end("NOT FOUND");
  },
};

function handler(request, response) {
  const { url, method } = request;
  const routeKey = `${url.toLowerCase()}:${method.toLowerCase()}`;
  const chosen = routes[routeKey] || routes.default;

  return chosen(request, response);
}

const app = http
  .createServer(handler)
  .listen(3000, () => console.log("running at 3000"));

module.exports = app;
