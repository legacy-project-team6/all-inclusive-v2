const router = require("express").Router();
const Message = require("../../database/Schema/Messages.js");

router.get("/", async (req, res) => {
  await Message.find({}, (err, data) => {
    res.json(data);
  });
});

router.get("/:id", async (req, res) => {
  await Message.findById(req.params.id, (err, data) => {
    res.json(data);
  });
});

router.post("/add", async (req, res) => {
  let newMessage = new Message({
    user: req.body.user,
    text: req.body.text,
  });
  await newMessage.save(() => {
    res.json(newMessage);
  });
});

router.delete("/", async (req, res) => {
  await Message.deleteMany(req.params.id, req.body);
  res.json({ message: "all data deleted" });
});

router.delete("/:id", async (req, res) => {
  await Message.findByIdAndDelete(req.params.id, req.body);
  res.json({ message: "specific data deleted" });
});

router.put("/:id", async (req, res) => {
  await Message.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "specific data updated" });
});

module.exports = router;
