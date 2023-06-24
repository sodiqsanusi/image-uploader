const express = require("express");
const connectDB = require("./config/db");
const { PORT } = require("./config/env");
const errorHandler = require("./middleware/errorMiddleware");
const app = express();


let startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error("There was an error communicating to the server, due to database connection issues.", error)
  }
}

//* Set up possible routes for application
app.use("/image", require("./routes/imageRoute"));


app.use(errorHandler);

startServer();