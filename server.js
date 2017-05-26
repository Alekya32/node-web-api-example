var express = require("express")
var app = express();
var mongoose = require("mongoose");
var User = require("./user")
var router = express.Router();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost/UserDetails",function(){
	console.log("conneted to database")
})

router.get("/userdata",function(request,response){
	User.getUserDetails(function(err,userdata){
		if(err){
			throw err;
		}
		
	
	response.json(userdata)
	})
})

router.post("/userpostdata",function(request,response){
	var userObject = request.body;
	User.setUserDetails(userObject,function(err,userdetails){
		if(err){
			throw err;
		}
		response.json(userdetails)
	})
})


app.use("/pathto",router);

app.listen(8999)

