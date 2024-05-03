const productRouter = require("express").Router();
const {
  fetchProduct,
  createProduct,
  fetchOneProduct,
} = require("../controller/product.controller");

productRouter.get("/", fetchProduct);
productRouter.post("/", createProduct);
productRouter.get("/getOneProduct/:id",fetchOneProduct)

module.exports = productRouter;
