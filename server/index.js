require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
<<<<<<< HEAD
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

// Connect to DB
=======
const userRoute = require("./routes/user");

>>>>>>> d02f054c3e91bda34efcf89ee9ecaa2ddb90a4cd
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

<<<<<<< HEAD
app.use(express.json());
app.use("/api/auth", authRoute);
=======
app.get("/api/test", (req, res) => {
  console.log("test is successful");
});

app.use(express.json());
>>>>>>> d02f054c3e91bda34efcf89ee9ecaa2ddb90a4cd
app.use("/api/user", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running");
});
