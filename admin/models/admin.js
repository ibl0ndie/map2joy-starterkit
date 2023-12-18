const Joi = require("joi");
const mongoose = require("mongoose");

const Admin = new mongoose.model('Admin',new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3,
        maxLength:50,
    },
    username:{
        type:String,
        required:true,
        minLength:3,
        maxLength:50,
    },
    email:{
        type:String,
        required:true,
        minLength:3,
        maxLength:255,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minLength:3,
        maxLength:1024,
    },

}));

function validateAdmin(admin){
    const schema = {
        name : Joi.string().min(3).max(50).required(),
        username : Joi.string().min(3).max(50).required(),
        email : Joi.string().min(3).max(255).required(),
        password : Joi.string().min(3).max(255).required(),
    }

    return Joi.validate(admin,schema);
}

exports.Admin = Admin;
exports.validate = validateAdmin;