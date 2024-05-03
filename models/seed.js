const { Product } = require("./product.model")
const { products } = require("./productData")


const seed = async() =>{
    const insertProducts = await Product.create(products)
}

seed()