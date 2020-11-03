const mongoose = require('mongoose');
const particularSchema = new mongoose.Schema(
    {
        name  : {type:String , required:true},
        email : {type:String , required:true},
        password : {type:String , required:true},
        phoneNumber : {type:String , required:true},
        age :{type:Number , required:true},
        gender : {type:String , required:true},
        imgUrl :{type:String , required:true},
        description :{type:String , required:true},
        //events
    },
    {
        timestamps : true,
    }
);
module.exports = mongoose.model("Particular",particularSchema)