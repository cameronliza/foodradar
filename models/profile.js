const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    bio: { type: String },
    lifestyle: [{ type: String }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    location: { type: String },
  },
  { timestamps: {} }
);
//reviews, list , post, favourite

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
