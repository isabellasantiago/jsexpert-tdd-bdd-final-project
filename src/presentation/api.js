const http = require("http");
const { once } = require("events");
const makeCarServiceRent = require("./factories/car-factory");

const routes = {
  "/rent:post": async (request, response) => {
    const requestData = JSON.parse(await once(request, "data"));
    const finalResponse = makeCarServiceRent(requestData);

    return response.end(JSON.parse(data));
  },
  default(request, response) {
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
