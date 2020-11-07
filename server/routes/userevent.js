const router = require("express").Router();
const UserEvent = require("../../database/Schema/userEvents.js");

router.get("/", async (req, res) => {
  await UserEvent.find({}, (err, data) => {
    res.json(data);
  });
});

router.post("/:id", async (req, res) => {
  await UserEvent.findById(req.params.id, (err, data) => {
    res.json(data);
  });
});

router.post("/add", async (req, res) => {
  newUserEvent = new UserEvent({
    user: req.body.user,
    name: req.body.name,
    type: req.body.type,
    place: req.body.place,
    date: req.body.date,
    imgUrl: req.body.imgUrl,
    like: req.body.like,
    disLike: req.body.disLike,
    seats: req.body.seats,
    price: req.body.price,
  });
  await newUserEvent.save(() => {
    res.json(newUserEvent);
  });
});

router.delete("/", async (req, res) => {
  await UserEvent.deleteMany(req.params.id, req.body);
  res.json({ message: "all data deleted" });
});

router.delete("/:id", async (req, res) => {
  await UserEvent.findByIdAndDelete(req.params.id, req.body);
  res.json({ message: "specific data deleted" });
});

router.put("/:id", async (req, res) => {
  await UserEvent.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "specific data updated" });
});

module.exports = router;
