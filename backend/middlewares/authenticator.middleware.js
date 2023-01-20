require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

const authenticate = (req,res, next) => {
    const token = req.headers.authorization;
    if (token) {
        const decode = jwt.verify(token, process.env.secretKey);
        if (decode){
            next();
        } else {
            res.status(400).send({message:'Please Login first', error:true});
        }
    } else {
        res.status(400).send({message:'Please Login first', error:true});
    }
}

module.exports = {
    authenticate
};
