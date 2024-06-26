const express = require("express");
const db = require("./models/main");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const router = require("./routes/client.route");
const productRouter = require("./routes/product.route");
const PORT = 4000;

const app = express();

app.use(express.json()); //using express.json middleware

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};


const specs = swaggerJsdoc(options);
app.use("/api", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/clients", router);
app.use("/products", productRouter);

app.get("/testing",(req,res)=>{
  res.status(200).send("test")
})
app.listen(PORT, () => {
  console.log("your server is listing to http://localhost:" + PORT);
});
