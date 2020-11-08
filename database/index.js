const mongoose = require('mongoose');


//database connection 
const Url ='mongodb://localhost:27017/allinclusive'

const db = mongoose.connect(Url,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useFindAndModify:false,
  useCreateIndex:true
})
const Connection = mongoose.connection ;
Connection.on('error',console.error.bind(console,'connection error:'))
Connection.once('open',function(){
console.log('Database is connected ')
})

module.exports = db;