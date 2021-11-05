const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const { ensureAuthenticated } = require("../config/auth");

const User = require("../models/user");

//
router.get("/", async (req, res) => {
  const users = await User.find({});
  if (!users) {
    return res.status(400).json({ msg: "No users avaiable" });
  }
  res.json({ users });
});

//register - public
router.post("/register", async (req, res) => {
  const { email, username, password, isAsmin } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    return res.json({ msg: "User already exists" });
  } else {
    const newUser = new User({
      email,
      username,
      password,
      isAsmin,
    });
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);
    newUser.save();
    res.json(newUser);
  }
});
// login;
router.post("/login", (req, res, next) => {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return res.status(400).json({ errors: err });
    }
    if (!user) {
      return res.status(400).json({ errors: "No user found" });
    }
    req.logIn(user, function (err) {
      if (err) {
        return res.status(400).json({ errors: err });
      }
      //add jwt sign here
      return res.status(200).json({ success: `logged in ${user.username}` });
    });
  })(req, res, next);
});

//check if auth
router.get("/isAuth", ensureAuthenticated, (req, res) => {
  res.json({ isAuth: true, user: req.user });
  // res.send("is auth");
});

//LOGOUT
router.get("/logout", (req, res) => {
  //on the client side it would reomve the jwt token and
  req.session.destroy();
  res.send("signed out");
});

module.exports = router;
