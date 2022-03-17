const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const session = require('express-session')

const indexController = require('./server/controller/index.controller'); 

const app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({'secret':'buhudwuhjdwukdwjfwjkfejk'}))
app.use(express.static(path.join(__dirname, 'build')));

app.use('/webapi',indexController);

app.get('*' , function(req,res){
	var mypath=path.join(__dirname,'build/index.html')
	res.sendFile(mypath) 
})

http.createServer(app).listen(3000,()=>{
console.log('Server Running');
});
