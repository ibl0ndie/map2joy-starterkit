const express = require('express');

const app = express();

app.use(express.json());

app.get('/admin/login',(req,res)=>{
   const admin = {
       username : req.body.username,
       password : req.body.password
   }
   if(admin.username === "" && admin.passowrd === ""){
       login();
   }
});