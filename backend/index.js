require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./configs/db");
const productRoute = require("./routes/products.route");
const { adminRouter } = require("./routes/adminRoutes");

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use("/products", productRoute);
app.use("/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Masai Furniture House");
});

app.listen(PORT, async () => {
  try {
    await dbConnect;
    console.log("Connected to the DB");
  } catch (e) {
    console.log("Error occured while connecting to the DB");
    console.log(e);
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});
