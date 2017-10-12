require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
Mongoose.Promise = global.Promise
const app = express()
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
const connection = mongoose.connection

connection.on("connected", () => {
    console.log("Successfully connected to Mongo")
})

connection.on("error", (err) => {
    console.log("Mongo Error ", err)
})

app.use(bodyParser.json())

app.get("/", (request, response) => {
    response.send("Hello world")
})

const port = process.env.port || 3000
app.listen(port, () => {
    console.log("App is up on port ", port)
})