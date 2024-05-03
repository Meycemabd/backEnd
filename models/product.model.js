const { Schema, model} = require("mongoose");
const db = require("./main")


const productSchema = new Schema({
    id : Number , 
    productName : String , 
    price : Number , 
    imageUrl : String , 
    description : String , 
    category : String 
})


const Product = model("products",productSchema)

module.exports = {Product}