const express = require("express");
const { AdminModel } = require("../models/adminModel");
const { ProductModel } = require("../models/products.model");
const { UserModel } = require("../models/users.model");

require("dotenv").config();
const SecretKey = process.env.secretKey;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const adminRouter = express.Router();
adminRouter.use(express.json());

adminRouter.get("/alladmins", async (req, res) => {
  try {
    const allAdmins = await AdminModel.find();
    res.status(200).send(allAdmins);
  } catch (e) {
    res
      .status(404)
      .send({ message: "Something went wrong", error: true, errorMessage: e });
  }
});

adminRouter.get("/singleadmin/:id", async (req, res) => {
  const Id = req.params.id;
  try {
    const singleAdmin = await AdminModel.find({ _id: Id });
    res.status(200).send(singleAdmin);
  } catch (e) {
    res
      .status(404)
      .send({ message: "Something went wrong", error: true, errorMessage: e });
  }
});

adminRouter.delete(`/deleteadmin/:id`, async (req, res) => {
  const ID = req.params.id;
  try {
    await AdminModel.findByIdAndDelete({ _id: ID });
    res.send(`Deleted the Admin whose id is ${ID}`);
  } catch (error) {
    console.log(error);
    res.send({ err: "Something went wrong" });
  }
});

adminRouter.get("/allcustomer", async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    res.status(200).send(allUsers);
  } catch (e) {
    res
      .status(404)
      .send({ message: "Something went wrong", error: true, errorMessage: e });
  }
});

adminRouter.get("/singlecustomer/:id", async (req, res) => {
  const Id = req.params.id;
  try {
    const allUsers = await UserModel.find({ _id: Id });
    res.status(200).send(allUsers);
  } catch (e) {
    res
      .status(404)
      .send({ message: "Something went wrong", error: true, errorMessage: e });
  }
});

adminRouter.delete(`/deletecustomer/:id`, async (req, res) => {
  const ID = req.params.id;
  try {
    await UserModel.findByIdAndDelete({ _id: ID });
    res.send(`Deleted the Product whose id is ${ID}`);
  } catch (error) {
    console.log(error);
    res.send({ err: "Something went wrong" });
  }
});

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

adminRouter.get("/allproducts", async (req, res) => {
  try {
    const allProducts = await ProductModel.find();
    res.status(200).send(allProducts);
  } catch (error) {
    res
      .status(404)
      .send({ message: "Error while fetching products", error: error });
  }
});

adminRouter.get("/product", async (req, res) => {
  const page = req.query.page || 0;
  const perPage = req.query.limit;
  try {
    if (req.query.price) {
      const products = await ProductModel.find()
        .sort({ price: req.query.price })
        .skip(page * perPage)
        .limit(perPage);
      res.send(products);
    } else if (req.query.quantity) {
      const products = await ProductModel.find()
        .sort({ quantity: req.query.quantity })
        .skip(page * perPage)
        .limit(perPage);
      res.send(products);
    } else {
      const products = await ProductModel.find()
        .skip(page * perPage)
        .limit(perPage);
      res.send(products);
    }
  } catch (error) {
    console.log(error);
    res.send({ "Error while fetching products": error });
  }
});

adminRouter.get("/singleproduct/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.find({ _id: id });
    res.status(200).send(product);
  } catch (error) {
    res
      .status(404)
      .send({ message: "Error while fetching products", error: error });
  }
});

adminRouter.post("/addproduct", async (req, res) => {
  const payload = req.body;
  try {
    const newProduct = new ProductModel(payload);
    await newProduct.save();
    res.send(newProduct);
  } catch (error) {
    console.log(error);
    res.send({ err: "Something went wrong" });
  }
});

adminRouter.patch(`/updateproduct/:id`, async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  //console.log(ID, payload);
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      { _id: ID },
      payload
    );
    //console.log(updatedProduct);
    res.send(updatedProduct);
  } catch (error) {
    console.log(error);
    res.send({ err: "Something went wrong" });
  }
});

adminRouter.delete(`/deleteproduct/:id`, async (req, res) => {
  const ID = req.params.id;
  try {
    await ProductModel.findByIdAndDelete({ _id: ID });
    res.send(`Deleted the Product whose id is ${ID}`);
  } catch (error) {
    console.log(error);
    res.send({ err: "Something went wrong" });
  }
});

module.exports = { adminRouter };
