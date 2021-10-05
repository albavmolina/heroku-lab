// Basic Express Server npDependencies
const express = require("express")
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const app = express()
const db = mongoose.connection

// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000

// Configure Server Settings
require("dotenv").config()

// Establish connection to MongoDB
const DATABASE_URL = process.env.DATABASE_URL;
// Database Connection
mongoose.connect(process.env.DATABASE_URL)

// Database Connection Error/Success

db.on("error", (err) => console.log(err.message + " is mongo not running?"))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))

// Mount Middleware

//use public folder for static assets
app.use(express.static("public"))

//populate req.body
app.use(express.urlencoded({ extended: false })) 
app.use(express.json()) 

//use method override
app.use(methodOverride("_method"))

// Mount Routes 

app.get("/deployment", (req, res) => {
  res.send("Hello World!")
})



// Routes / Controllers INDUCES



// Listener
app.listen(PORT, () => console.log(`server is listning on port: ${PORT}`));