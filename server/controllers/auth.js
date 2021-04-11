const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { User } = require("../exports/database");

exports.signUp = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty) {
      return res.status(422).json({ error: errors.array()[0].msg });
    }

    const userCheck = await User.findOne({ email: req.body.email }).exec();

    if (userCheck) {
      return res.status(301).json({
        error: "You have  created your account yet!, Please Sign in!",
      });
    }

    const user = await new User(req.body).save();

    if (!user) {
      return res.status(400).json({
        error: "NOT able to save user in DB",
      });
    }

    // Create Token
    const token = jwt.sign({ _id: user._id }, process.env.SECRET, {
      expiresIn: "1h",
    });

    const { _id, name, email } = user;

    return res.status(200).json({
      message: "Successfully loggedIn!",
      data: { token, user: { _id, name, email } },
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.logIn = async (req, res) => {
  try {
    const errors = validationResult(req);

    const { email, password } = req.body;

    if (!errors.isEmpty) {
      return res.status(422).json({ error: errors.array()[0].msg });
    }

    const user = await User.findOne({ email }).exec();

    if (!user) {
      return res.status(301).json({
        error: "You have not created your account yet!, Please Sign Up",
      });
    }

    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password do not match",
      });
    }

    // Create Token
    const token = jwt.sign({ _id: user._id }, process.env.SECRET, {
      expiresIn: "1h",
    });

    const { _id, name } = user;

    return res.status(200).json({
      message: "Successfully loggedIn!",
      data: { token, user: { _id, name, email } },
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
