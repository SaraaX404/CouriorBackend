require("dotenv").config()
require("express-async-errors")
const mysql = require("mysql")
const accessLogMiddleware = require("./middlewares/logger.middleware")
const routes = require("./routes/api")
const DeliverRoutes = require("./routes/delivery")
const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database : process.env.DB_NAME,
    port: process.env.DB_PORT
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
  });

app.use(express.json())

// Req and Res logger.
app.use(accessLogMiddleware)

app.use("/", routes)
app.use("/delivery", DeliverRoutes)


exports.db = db
module.exports = app
