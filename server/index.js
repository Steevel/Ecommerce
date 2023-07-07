require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

// Connect to DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running");
});
