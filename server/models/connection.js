const mongoose = require("mongoose")
const url = "mongodb://localhost:27017/reactlogin"
mongoose.connect(url)
const db = mongoose.connection
console.log("successfully connected to MongoDB")
module.exports = db

