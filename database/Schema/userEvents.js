const mongoose = require('mongoose');
const userEventsSchema = new mongoose.Schema(
    {
        user : {type:String , required:true},
        name  : {type:String , required:true},
        type : {type:String , required:true},
        place : {type:String , required:true},
        date: {type:Date , required:true},
        imgUrl :{type:String , required:true},
        like :{type:Number , required:true},
        disLike :{type:Number , required:true},
        seats: { type: Number, required: true },
        price: { type: Number, required: true }

    },
    {
        timestamps : true,
    }
);
module.exports = mongoose.model("UserEvent",userEventsSchema)