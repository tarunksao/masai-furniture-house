require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const {CartModel} = require('../models/cart.model');
const { authenticate } = require( '../middlewares/authenticator.middleware' );

const app = express.Router();
// app.use(authenticate);
app.use(express.json());

app.get('/', async (req,res) => {
    try {
        const allCartItem = await CartModel.find().populate('product').populate('user');
        res.status(200).send(allCartItem);
    } catch (e) {
        res.status(404).send({message:'Something went wrong', error:true, errorMessage:e});
    }
});

app.post('/add', async (req,res) => {
    const token = req.headers.authorization;
    const decode = jwt.verify(token, process.env.secretKey);
    const payload = req.body;
    payload.user = decode.userid;
    try{
        const addToCart = new CartModel(payload);
        await addToCart.save();
        res.status(201).send({message:'Product added to cart',error:false, addedProduct:addToCart});
    } catch(e) {
        return res.status(404).send({message:'Something went wrong', error:true, errorMessage:e});
    }
});

app.delete('/delete/:id', async (req,res) => {
    const {id} = req.params;
    const token = req.headers.authorization;
    const decode = jwt.verify(token, process.env.secretKey);
    const user = decode.userid;
    try{
        const deleteCartItem = await CartModel.deleteOne({_id:id, user});
        res.status(200).send({message:`Cart Item with id-${id} has been deleted.`, error:false, deletedProduct:deleteCartItem});
    } catch (e) {
        res.status(404).send({message:'Something went wrong', error:true, errorMessage:e});
    }
});

app.patch('/update/:id', async (req,res) => {
    const {id} = req.params;
    const payload = req.body;
    const token = req.headers.authorization;
    const decode = jwt.verify(token, process.env.secretKey);
    const user = decode.userid;
    try {
        const updateCartItem = await CartModel.updateOne({_id:id, user}, payload);
        res.status(200).send({message:`Product with id-${id} has been updated`, error:false});
    } catch (e) {
        res.status(404).send({message:'Something went wrong', error:true, errorMessage:e});
    }
})

module.exports = app;
