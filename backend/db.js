const mongoose = require("mongoose");

const MONGOURL =
  "mongodb+srv://todo:NMcETupLYuORuR1n@aysmptotic.8u1l73h.mongodb.net/todo?retryWrites=true&w=majority&appName=Aysmptotic";

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
