const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const { PORT } = require("./config/env");
const errorHandler = require("./middleware/errorMiddleware");
const app = express();

const corsoption = {
  origin: ["http://localhost:3000"],
  credentials: true,
  optionSuccessStatus: 200,
  methods: ["GET", "POST"]
}

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
app.use(cors(corsoption))

app.use(errorHandler);

startServer();