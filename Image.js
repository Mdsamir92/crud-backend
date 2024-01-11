const mongoose = require("mongoose")

const ImageSchema = new mongoose.Schema({

    image:String
})

const Image = new mongoose.model("images",ImageSchema)

module.exports = Image;