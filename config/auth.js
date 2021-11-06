const jwt = require("jsonwebtoken");
const config = require("../config/default.json");

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  if (!token && req.isAuthenticated()) {
    console.log("newtoken");
    return res.redirect("/user/newtoken");
  } else if (!req.isAuthenticated()) {
    console.log(token, req.isAuthenticated());
    return res.status(401).json({ msg: "cookie, authorization denied" });
  } else {
    return res.status(401).json({ msg: "somethinh went wrong" });
  }

  // Verify token
  try {
    jwt.verify(token, config.jwtSecret, (error, decoded) => {
      if (error && req.isAuthenticated()) {
        return res.redirect("/user/newtoken");
      } else if (error && !req.isAuthenticated()) {
        return res.status(401).json({ msg: "Token is not valid" });
      } else {
        console.log(token);
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error("something wrong with auth middleware");
    res.status(500).json({ msg: "Server Error" });
  }
};
