const router = require("express").Router();
const User = require("../../database/Schema/Users.js");
const bcrypt = require("bcryptjs");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

//Validation for user registration

const schema = Joi.object({
  type: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
  phoneNumber: Joi.number().required(),
  specialNeed: Joi.boolean().required(),
  imgUrl: Joi.string().required(),
  address: Joi.string().required()
});

router.post("/add", async (req, res, next) => {
  //check if user already exist
  console.log(req.body);
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.json({message:"Email already exists"});

  try {
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      type:req.body.type,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      phoneNumber: req.body.phoneNumber,
      specialNeed: req.body.specialNeed,
      imgUrl: req.body.imgUrl,
    });

    const { error } = await schema.validateAsync(req.body);
    const savedUser = await newUser.save();
    res.send(savedUser);
  } catch (error) {
    if (error.isJoi === true) res.status(500).json(error.details[0].message);
    next(error);
  }
});

//Validation for user login

const loginschema = Joi.object({
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});

router.post("/login", async (req, res, next) => {
  //check if user already exist
  try {
    const { error } = await loginschema.validateAsync(req.body);
    const user = await User.findOne({ email: req.body.email });
<<<<<<< HEAD
    if (!user) return res.status(500).json("Email or password is wrong");

    //check password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(500).json("password not valid");
=======
    if (!user) return res.json({});

    //check password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.json({});
>>>>>>> 736e80ed0d86db6874f6f36ebfca7ee8c2ed63d8

    //create and assign a token
    const token = jwt.sign({ _id: user._id }, config.get("jwt").secret);
    res.status(200).header("auth-token", token).json(user);
  } catch (error) {
    if (error.isJoi === true) res.status(500).json(error.details[0].message);
    next(error);
  }
});

router.get("/", async (req, res) => {
  await User.find({}, (err, data) => {
    res.json(data);
  });
});

router.delete("/", async (req, res) => {
  await User.deleteMany(req.params.id, req.body);
  res.json({ message: "all data deleted" });
});

router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id, req.body);
  res.json({ message: "specific data deleted" });
});

router.put("/:id", async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "specific data updated" });
});

module.exports = router;
