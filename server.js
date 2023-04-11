const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

//const uri="mongodb+srv://muskanmandloi:<password>@netflix.0z5r4ng.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect("mongodb+srv://muskanmandloi:hello15%40@netflix.0z5r4ng.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(4000, () => {
  console.log("server started on port 5000");
});
