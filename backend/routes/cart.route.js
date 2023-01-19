const express = require('express');
const {CartModel} = require('../models/cart.model');

const app = express.Router();
app.use(express.json());

app.get('/', (req,res) => {
    res.send('Get All Cart Products here');
});

app.post('/add', async (req,res) => {
    const payload = req.body;
    try{
        const addToCart = new CartModel(payload);
        await addToCart.save();
        res.status(201).send({message:'Product added to cart',error:false, addedProduct:addToCart});
    } catch(e) {
        res.status().send({message:'Something went wrong', error:true, errorMessage:e});
    }
});

app.patch('/update/:id', async (req,res) => {
    const {id} = req.params;
    const payload = req.body;
    try {
        const updateCartItem = await CartModel.findByIdAndUpdate({_id:id}, payload);
        res.status().send({message:`Product with id-${id} has been updated`, error:false});
    } catch (e) {
        res.status().send({message:'Something went wrong', error:true, errorMessage:e});
    }
})

module.exports = app;
