const express = require("express");
const connectDB = require("./config/db");
const { PORT } = require("./config/env");
const errorHandler = require("./middleware/errorMiddleware");
const app = express();


connectDB();

//* Set up possible routes for application
app.use("/image", require("./routes/imageRoute"));


app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})