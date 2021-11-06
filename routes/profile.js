const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
// const auth = require("../config/auth");

const Profile = require("../models/profile");
const User = require("../models/user");
//get all profiles - public
//i think i should make get all user and then link to their individual profiles
router.get("/", async (req, res) => {
  const profiles = await Profile.find({});

  if (!profiles) {
    return res.status(400).json({ msg: "No profiles avaiable" });
  }
  res.json(profiles);
});

//get- show specific profile

router.get("/:id", async (req, res) => {
  const profile = await Profile.findById(req.params.id).populate("user");
  //show revies. list and followers/following etc
  if (!profile) {
    return res.status(400).json({ msg: "No profile available" });
  }
  res.json(profile);
});

//get your profile - public
//all profile will be public and only the form will be private.
//we will check the profile and the user have the same user id and only then will
//it show edit button and change avatar etc like campground on yelpcamp.
// router.get("/me", ensureAuthenticated, async (req, res) => {
//   const profile = await Profile.findOne({
//     user: req.user.id,
//   }).populate("user", ["username", "avatar"]);

//   if (!profile) {
//     return res.status(400).json({ msg: "There is no profile for this user" });
//   }
//   res.json(profile);
// });

// POST - craete/update - private
router.post("/", ensureAuthenticated, async (req, res) => {
  const { lifestyle, ...rest } = req.body;
  const profileField = {
    user: req.user.id,
    lifestyle: Array.isArray(lifestyle)
      ? lifestyle
      : lifestyle.split(",").map((lifestyle) => lifestyle.trim()),
    ...rest,
  };
  let profile = await Profile.findOneAndUpdate(
    { user: req.user.id },
    { $set: profileField },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );
  res.json(profile);
});

//delete - private , deletes users,reviews, posts, profile
router.delete("/", ensureAuthenticated, async (req, res) => {
  try {
    await Promise.all([
      Profile.findOneAndRemove({ user: req.user.id }),
      User.findOneAndRemove({ user: req.user.id }),
    ]);
    req.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
