const { Schema, model } = require("mongoose");
const db = require("./main")

const clientSchema = new Schema({
    id : Number , 
    name : String , 
    email : String , 
    password : String , 
    imageUrl : String
})

const Client = model("clients",clientSchema)

module.exports = {Client}