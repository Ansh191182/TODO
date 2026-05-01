const mongoose = require("mongoose");

const MONGOURL = "mongodb://localhost:27017/anisha";

const db = async (req, res) => {
  try {
    await mongoose.connect(MONGOURL);

    console.log("Database is successfully connected");
  } catch (error) {
    console.log(error);
    console.log("DataBase is not successfully connected");
  }
};

module.exports = db;
