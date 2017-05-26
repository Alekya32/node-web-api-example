var mongoose = require ("mongoose");
var userSchema =mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	qual :{
		type:String,
		required:true
	},
	role:{
		type:String,
		required:true
	}

});

var User = module.exports = mongoose.model("user",userSchema,"user");

module.exports.getUserDetails = function(callback){
	return User.find(callback);
}

module.exports.setUserDetails =function(userObj,callback){
	return User.create(userObj,callback)
}