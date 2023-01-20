const express = require('express');
const { ProductModel } = require( '../models/products.model' );

const app = express.Router();
app.use(express.json());

app.get('/:category', async (req,res) => {
    const {category} = req.params;
    const {sub_category} = req.query;
    try{
        if (category) {
            if (sub_category) {
                const getSubCategory = await ProductModel.find({category, sub_category});
                res.status(200).send(getSubCategory);
            } else {
                const getCategory = await ProductModel.find({category});
                res.status(200).send(getCategory);
            }
        } else {
            const allProduct = await ProductModel.find();
            res.status(200).send({message:'Get all products here', allProduct});
        }
    } catch (e) {
        res.status(404).send({message:'Error while fetching products', error:e});
    }
});

app.get('/', async (req,res) => {
    try {
        const allProduct = await ProductModel.find();
        res.status(200).send({message:'Get all products here', allProduct});
    } catch (e) {
        res.status(404).send({message:'Error while fetching products', error:e});
    }
})

app.post('/create', async (req,res) => {
    const payload = req.body;
    try{
        const addProduct = new ProductModel(payload);
        await addProduct.save();
        res.status(201).send({message:'Added a new Product', product:addProduct});
    } catch (e) {
        res.status(404).send({message:'Error while adding new product', error:e});
    }
});

app.patch('/update/:id', async (req,res) => {
    const {id} = req.params;
    const payload = req.body;
    try{
        const modifyProduct = await ProductModel.findByIdAndUpdate({_id:id}, payload);
        res.status(200).send(`Product with Id-${id} has been updated.`);
    } catch (e) {
        res.status(404).send({message:'Error while updating new product', error:e});

    }
});

app.delete('/delete/:id', async (req,res) => {
    const {id} = req.params;
    try{
        const deleteProduct = await ProductModel.findByIdAndDelete({_id:id});
        res.status(200).send({message:`Product with Id-${id} has been deleted.`, deleteProduct});
    } catch (e) {
        res.status(404).send({message:'Error while updating new product', error:e});
    }
});

module.exports = app;
