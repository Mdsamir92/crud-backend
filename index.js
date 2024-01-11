require("dotenv").config();
const express = require("express")
const cors = require("cors")
const router = require("./route/create");
const connectDb = require("./db");
const bodyParser = require("body-parser");


const app = express()
app.use(bodyParser.json()) 
app.use(express.urlencoded())
app.use(cors(
        {
        origin: ["https://sam-crud-mdsamir92.vercel.app/upload"],
        methods:["POST","GET","PUT","DELETE"],
        credentials: true
    }
))

app.use('/img',express.static('uploads'));

app.use('/api',router)

connectDb();





app.listen(5000, () => {
    console.log("be started backend")
})

