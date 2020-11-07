const router = require("express").Router();
const Event = require("../../database/Schema/Events.js");

router.get("/", async (req, res) => {
  try {
    await Event.find({}, (err, data) => {
      res.json(data);
    });
  } catch (err) {
    res.status(400).send(err);
  }
});
//post request for searched data;

router.post("/search", async (req, res) => {
  const keyword = req.body.searchWords;
  console.log(keyword);
  let filtred  = [];
  console.log(keyword);
  try {
    await Event.find({}, (err, data) => {      
      data.forEach(event => {
        if(event.type.substring(0,keyword.length).toLowerCase() === keyword.toLowerCase() || event.place.substring(0,keyword.length).toLowerCase() === keyword.toLowerCase()) {
        return filtred.push(event)
        }
      });
      res.json(filtred)
      
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/add", async (req, res) => {
  console.log(req.body);
 let newEvent = new Event({
    name: req.body.name,
    type: req.body.type,
    place: req.body.place,
    date: req.body.date,
    description: req.body.description,
    imgUrl: req.body.imgUrl,
    like: req.body.like,
    disLike: req.body.disLike,
    seats: req.body.seats,
    price: req.body.price
  });
  await newEvent.save(() => {
    res.json(newEvent);
  });
});



router.post("/addmany", async (req, res) => {
  await Event.insertMany(req.body);
  res.json(" all data saved");
});

router.delete("/", async (req, res) => {
  await Event.deleteMany(req.params.id, req.body);
  res.json({ message: "all data deleted" });
});

router.post("/:id", async (req, res) => {
  await Event.findById(req.params.id, (err, data) => {
    res.json(data);
  });
});





router.delete("/:id", async (req, res) => {
  await Event.findByIdAndDelete(req.params.id, req.body);
  res.json({ message: "specific data deleted" });
});

router.put("/:id", async (req, res) => {
  await Event.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "specific data updated" });
});



module.exports = router;
