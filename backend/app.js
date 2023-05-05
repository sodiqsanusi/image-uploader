const express = require("express");
const connectDB = require("./config/db");
const { PORT } = require("./config/env");
const errorMiddleware = require("./middleware/errorHandler");
const app = express();


connectDB();

//* Set up possible routes for application
app.use("/image", require("./routes/imageRoute"))


app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})