const mongoose = require('mongoose');
const messagesSchema = new mongoose.Schema(
    {
        user : {type:String , required:true},
        text : {type:String , required:true},
    },
    {
        timestamps : true,
    }
);
module.exports = mongoose.model("Message",messagesSchema)