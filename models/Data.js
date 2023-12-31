const mongoose = require("mongoose")

const CrudSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String
})

const Crud = new mongoose.model("crud",CrudSchema)

module.exports = Crud;