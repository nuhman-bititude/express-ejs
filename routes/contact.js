const express=require('express')
const app = require('../app')
const router=express.Router()

router.post("/contact",(req,res,next)=>{
    res.render("contact",{name:req.body.name,email:req.body.email,subject:req.body.subject,message:req.body.subject})
})


module.exports=router