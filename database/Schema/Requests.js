const mongoose = require('mongoose');
const requestsSchema = new mongoose.Schema(
    {
        type : {type:String , required:true},
        phone : {type:Number , required:true},
    },
    {
        timestamps : true,
    }
);
module.exports = mongoose.model("Request",requestsSchema)