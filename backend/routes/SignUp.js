const express = require("express");

const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/userSchema");
router.post("/signUp", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status("500").json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email: email });

    if (user) {
      return res.status(500).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name: name,
      email: email,
      password: hashPassword,
    });

    await newUser.save();
    return res
      .status(200)
      .json({ message: "User register successfully", name , email });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
