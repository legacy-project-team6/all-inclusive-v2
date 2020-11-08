const router = require("express").Router();
const Company = require("../../database/Schema/Companies.js");
const bcrypt = require("bcryptjs");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

//Validation for company registration

const schema = Joi.object({
  type: Joi.string().min(6).required(),
  name: Joi.string().min(6).required(),
  emailCompany: Joi.string().min(6).required().email(),
  passwordCompany: Joi.string().min(6).required(),
  phoneNumberCompany: Joi.number().required(),
  adress: Joi.string().required(),
  imgUrlCompany: Joi.string().required(),
});

router.post("/add", async (req, res, next) => {
  //check if Company already exist
  console.log(req.body);
  const emailExist = await Company.findOne({ emailCompany: req.body.emailCompany });
  if (emailExist) return res.status(200).json({message:"Email already exists"});

  try {
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.passwordCompany, salt);

    const newCompany = new Company({
      type: req.body.type,
      name: req.body.name,
      emailCompany: req.body.emailCompany,
      passwordCompany: hashedPassword,
      phoneNumberCompany: req.body.phoneNumberCompany,
      adress: req.body.adress,
      imgUrlCompany: req.body.imgUrlCompany,
    });
    const { error } = await schema.validateAsync(req.body);
    const savedComapny = await newCompany.save();
    res.send(savedComapny);
  } catch (error) {
    if (error.isJoi === true) res.status(400).send(error.details[0].message);
    next(error);
  }
});

//Validation for user login

const loginschema = Joi.object({
  emailCompany: Joi.string().min(6).required().email(),
  passwordCompany: Joi.string().min(6).required(),
});

router.post("/login", async (req, res, next) => {
  console.log("from server", req.body);
  //check if user already exist
  try {
    const { error } = await loginschema.validateAsync(req.body);
    const company = await Company.findOne({
      emailCompany: req.body.emailCompany,
    });
    if (!company) return res.status(200).json({});

    //check password
    const validPass = await bcrypt.compare(
      req.body.passwordCompany,
      company.passwordCompany
    );
    if (!validPass) return res.status(200).json({});

    //create and assign a token
    const token = jwt.sign({ _id: company._id }, config.get("jwt").secret);
    res.header("auth-token", token).json(company);
  } catch (error) {
    console.log(error);
    if (error.isJoi === true) res.status(400).send(error.details[0].message);
    next(error);
  }
});

router.get("/", async (req, res) => {
  await Company.find({}, (err, data) => {
    res.json(data);
  });
});

router.delete("/", async (req, res) => {
  await Company.deleteMany(req.params.id, req.body);
  res.json({ message: "all data deleted" });
});

router.delete("/:id", async (req, res) => {
  await Company.findByIdAndDelete(req.params.id, req.body);
  res.json({ message: "specific data deleted" });
});

router.put("/:id", async (req, res) => {
  await Company.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "specific data updated" });
});

module.exports = router;
