const express = require("express")
const router = express.Router()
const indexModel = require("../models/index.model")
const jwt = require('jsonwebtoken')

router.get("/",(req,res,next)=>{
    res.send("<h1>Welcome to express server API</h1>")
})

router.get("/userRegister",(req,res,next)=>{
    var userDetails=req.query
	//console.log(userDetails)
    indexModel.userRegister(userDetails).then((result)=>{
		res.send({'output':'user register successfully....'})	
	}).catch((err)=>{
		console.log(err)
	})
})

router.get('/userLogin',(req,res,next)=>{
	var userDetails=req.query
	indexModel.userLogin(userDetails).then((result)=>{
		if(result.length==0)
		{
			req.session.token='error'
			res.send({'token':'error'})
		}
		else
		{	
			var payload={'subject':result[0].username}
			var token=jwt.sign(payload,"dywdewewhwevfewf")
			req.session.sunm=result[0].username
			req.session.srole=result[0].role
			res.send({'token':token,'userDetails':result[0]})
			
		}		
	}).catch((err)=>{
		res.send({'token':'error'})	
	})
})

module.exports = router