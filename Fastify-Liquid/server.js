// IMPORT OUR DEPENDENCIES
import fastify from "fastify"
import POV from "point-of-view"
import { Liquid } from "liquidjs"
import path from "path"

// CREATE OUR SERVER OBJECT
const server = fastify({ logger: true })
const __dirname = path.resolve(path.dirname(""))

// Generate Liquid Engine
const engine = new Liquid({
  root: path.join(__dirname, "views"),
  extname: ".liquid",
})

// Register the engine with our fastify server
server.register(POV, {
  engine: {
    liquid: engine,
  },
})

// WRITE OUR FIRST ROUTE
server.get("/", (request, response) => {
  response.send({ you: "did it" })
})

server.get("/cheese", (request, response) => {
  response.view("./views/cheese.liquid", { cheese: "gouda" })
})

server.get("/iseven/:num", (request, response) => {
  // determine if the number in the url is even
  const isEven = parseInt(request.params.num) % 2 === 0;
  // render a template
  response.view("./views/iseven.liquid", { isEven });
});

// GET THE SERVER LISTENING ON PORT 4000
server.listen(4000, (error, address) => {
  // Log address if server starts, log error if it fails
  console.log(error ? error : `listening on ${address}`)
})