const mongoose = require("mongoose")
const mongodbUri = "mongodb://127.0.0.1:27017/sgwrm"

mongoose.connect(mongodbUri).then(()=>{
    console.log("db connected")
}).catch((err)=>{
console.log(err)
})

const db = mongoose.connection

module.exports = db 


