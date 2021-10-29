const mongoose = require("mongoose");
// const imgAvatar = require("../resources/no-avatar.png");

const UserSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, minLength: 6, required: true },
    isAdmin: { type: Boolean, default: false },
    avatar: {
      type: String,
      default:
        "https://www.cheme.cornell.edu/sites/default/files/content/faculty/image/Portrait_Placeholder_7.png",
    },
  },
  { timestamps: {} }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
