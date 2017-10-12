require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const usersController = require("./routes/usersController")
mongoose.Promise = global.Promise
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
app.use(express.static(`${__dirname}/client/build`))


app.get("/", (request, response) => {
    response.sendFile(`${__dirname}/client/build/index.html`)
})

app.use("/api/users", usersController)

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log("App is up on port ", port)
})