require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { UserModel } = require( '../models/users.model' );

const app = express.Router();
app.use(express.json());

app.get('/', async (req,res) => {
    try{
        const allUsers = await UserModel.find();
        res.status(200).send({message:'Get all users here', error:false, users:allUsers});
    } catch (e) {
        res.status(404).send({message:'Something went wrong', error:true, errorMessage:e});
    }
});

app.post('/register', async (req,res) => {
    const {name, email, password, role} = req.body;
    try{
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                res.send({message:'Something went wrong', error:true, errorMessage:err});
            } else {
                const addUser = new UserModel({name, email, password:hash, role});
                await addUser.save();
                res.status(200).send({message:'User registered Successfully', error:false, User:addUser});
            }
        });
    } catch (e) {
        res.status(404).send({message:'Something went wrong', error:true, errorMessage:e});
    }
});

app.post('/login', async (req,res) => {
    const {email, password} = req.body;
    
    try {
        const user = await UserModel.find({email});
        if (user.length>0) {
            bcrypt.compare(password, user[0].password, (err,result) => {
                if (result) {
                    const token = jwt.sign({username:user[0].name, userid:user[0]._id, role:user[0].role}, process.env.secretKey);
                    res.setHeader('Authorization', token);
                    res.send({message:'User Login Successful', error:false, token, name:user[0].name});
                } else {
                    res.status(400).send({message:'Wrong Credentials', error:true});
                }
            });
        }
    } catch (e) {
        res.status(400).send({message:'Wrong Credentials', error:false, errorMessage:e});
    }
});

app.patch('/update/:id', async (req,res) => {
    const {id}=req.params;
    const payload = req.body;
    const token = req.headers.authorization;
    const decode = jwt.verify(token, process.env.secretKey);
    try{
        if (id===decode.userid) {
            const updateUser = await UserModel.findByIdAndUpdate({_id:id}, payload);
            res.status(200).send({message:`User with id-${id} has been updated`, error:false, updatedUser:updateUser});
        } else if (decode.role==='admin') {
            const updateUser = await UserModel.findByIdAndUpdate({_id:id}, payload);
            res.status(200).send({message:`User with id-${id} has been updated by admin`, error:false, updatedUser:updateUser});
        } else {
            res.status(403).send({message:'You are not authorized for this acitvity', error:true})
        }
    } catch (e) {
        res.status(403).send({message:'You are not authorized for this acitvity', error:true, errorMessage:e});
    }
});

app.delete('/delete/:id', async (req,res) => {
    const {id}=req.params;
    const token = req.headers.authorization;
    const decode = jwt.verify(token, process.env.secretKey);
    try{
        if (id===decode.userid) {
            const deleteUser = await UserModel.findByIdAndDelete({_id:id});
            res.status(200).send({message:`User with id-${id} has been deleted`, error:false, deletedUser:deleteUser});
        } else if (decode.role==='admin') {
            const deleteUser = await UserModel.findByIdAndDelete({_id:id});
            res.status(200).send({message:`User with id-${id} has been deleted by admin`, error:false, deletedUser:deleteUser});
        } else {
            res.status(403).send({message:'You are not authorized for this acitvity', error:true})
        }
    } catch (e) {
        res.status(403).send({message:'You are not authorized for this acitvity', error:true, errorMessage:e});
    }
});

app.get('/logout', (req,res) => {
    res.removeHeader('Authorization');
    res.send('User has been logged out');
});

module.exports = app;
