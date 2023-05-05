const mongoose = require("mongoose");
const { DB_URL } = require("./env");


let connectDB = async () => {
  try {
    let conn = await mongoose.connect(DB_URL);
    console.log(`Database connection to ${conn.connection.host} was successful`);
  } catch (error) {
    console.log(error);
    process.exitCode = 1;
  }
}

module.exports = connectDB;