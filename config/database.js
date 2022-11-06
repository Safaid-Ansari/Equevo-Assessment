// const { MONGO_URI } = process.env.MONGO_URI;
// const MONGO_URI = "";
//   "mongodb+srv://SafaidAnsari:iBcR2P7fTHF4UZBx@cluster0.vmqnisk.mongodb.net/TODO-API";

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/TODO_API", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
