require("dotenv").config();

let PORT = process.env.PORT || 5000;
let NODE_ENV = process.env.NODE_ENV;
let DB_URL = NODE_ENV == "test" ? process.env.TEST_DBURL : process.env.DB_URL;


module.exports = {
  NODE_ENV,
  DB_URL,
  PORT,
}