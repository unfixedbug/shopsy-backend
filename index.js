const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log(err));



app.use(express.json());
app.use("/api/users", userRoute);
app.listen(process.env.port || 5000, () => {
  console.log("server running");
});
