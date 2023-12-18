const {validate , Admin} = require('../models/admin.js');
const mongoose = require('mongoose');
const express = require("express");
const Joi = require('joi');
const router = express.Router();

router.app('/',(req,res)=>{
    const {error} = validate(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }

    let admin = await Admin.findOne({email:req.body.email});
    if(admin){
        return res.status(400).send('Admin is already registered!');
    }
    admin = new Admin({
        name:req.body.name,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
    })
    await admin.save();
    res.send(admin);
})

module.exports = router;