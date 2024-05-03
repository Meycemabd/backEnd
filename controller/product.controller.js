
const { Product } = require("../models/product.model")



const fetchProduct = async (req,res)=>{
   try {
    const response = await Product.find({})
    res.status(200).send(response)
   } catch (error) {
    console.log(error)
   }
}

const createProduct  = async (req,res) =>{
    try {
        const response = await Product.create(req.body)
        res.status(201).send(response)
        
    } catch (error) {
        console.log(error)
    }
}

const fetchOneProduct = async (req,res)=>{
    try {
        const oneProduct = await Product.findOne({
            id : +req.params.id
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = {fetchProduct,createProduct,fetchOneProduct}