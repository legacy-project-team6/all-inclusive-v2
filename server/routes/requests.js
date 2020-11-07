const router = require("express").Router();
const Request = require("../../database/Schema/Requests.js");

router.get("/", async (req, res) => {
  await Request.find({}, (err, data) => {
    res.json(data);
  });
});

router.post("/add",  (req, res) => {
  var newRequest = new Request({
    type: req.body.type,
    phone: req.body.phone,
  });
   newRequest.save((err,data)=>{
    if(err){
      console.log(err)
    }else{
      res.json('successfully registred');
    }
  

  });
});

module.exports = router;
