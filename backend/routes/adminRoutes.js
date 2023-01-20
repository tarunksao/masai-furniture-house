const express = require("express");
const { AdminModel } = require("../models/adminModel");
const { ProductModel } = require("../models/products.model");

require("dotenv").config();
const SecretKey = process.env.secretKey;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const adminRouter = express.Router();
adminRouter.use(express.json());

// adminRouter.get("/", async (req, res) => {
//   const admins = await AdminModel.find();
//   console.log(admins);
//   res.send("admins : ", admins);
// });

adminRouter.post("/register", async (req, res) => {
  const { adminName, email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hashed_password) => {
      if (err) {
        console.log(err, "While hashing the password");
      } else {
        const user = new AdminModel({
          adminName,
          email,
          password: hashed_password,
        });
        await user.save();
        res.send({ msg: "Registeration Successfull" });
      }
    });
  } catch (error) {
    console.log(error);
    res.send({ err: "Something went wrong while registeration" });
  }
});

adminRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await AdminModel.find({ email });
    // console.log(user)
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            {
              name: user[0].adminName,
              userID: user[0]._id,
              role: user[0].role,
            },
            SecretKey
          ); // secretkey = ikea
          res.send({ msg: "Login Successfull", token: token, user: user });
        } else {
          console.log(err);
          res.send("Wrong Credntials");
        }
      });
    } else {
      res.send("Wrong Credntials");
    }
  } catch (error) {
    console.log(error);
    res.send("Something went wrong while logging in");
  }
});

adminRouter.get("/product", async (req, res) => {
  const page = req.query.page || 0;
  const perPage = req.query.limit;
  try {
    const products = await ProductModel.find()
      .skip(page * perPage)
      .limit(perPage);
    res.send(products);
  } catch (error) {
    console.log(error);
    res.send({ "Error while fetching products": error });
  }
});

module.exports = { adminRouter };
