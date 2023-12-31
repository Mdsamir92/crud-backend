require("dotenv").config();
const express = require("express")
const cors = require("cors")
const router = require("./route/create");
const connectDb = require("./db");
const bodyParser = require("body-parser");


const app = express()
app.use(bodyParser.json()) 
app.use(express.urlencoded())
app.use(cors())


app.use('/api',router)

connectDb();





app.listen(5000, () => {
    console.log("be started backend")
})

