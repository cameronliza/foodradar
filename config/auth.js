// module.exports = {
//   ensureAuthenticated: function (req, res, next) {
//     if (req.isAuthenticated()) {
//       return next();
//       //check if jsonwebtoken has expired if it has then create another onw otherwise
//     }

//     return res.status(401).json({
//       error_msg: "Please log in to view that resource",
//     });
//   },
//   forwardAuthenticated: function (req, res, next) {
//     if (!req.isAuthenticated()) {
//       return next();
//     }
//     res.redirect("/home");
//   },
// };

//if cookie is expired then jsonweb token is expired as well
//on logout client side delete the jwtwebtoken ,
//we will have a cookie route and

//userauth check if the cookie is still working and then goes here
//if ensureAuthicated is working then checks if !token then make a new token otherwise vertify and give us the user info

//check if jwt is verifyed by adding jwt middleware to route
//if it authenicated then next ()
//if its not then check if  (req.isAthenicated()(cookie)) ? make a new token : login in

const jwt = require("jsonwebtoken");
const config = require("../config/default.json");

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if not token
  // if (!token) {
  //   if (req.isAuthenticated()) {
  //     const payload = { user: { id: user.id } };
  //     jwt.sign(
  //       payload,
  //       config.jwtSecret,
  //       { expiresIn: "1 day" },
  //       (err, token) => {
  //         if (err) throw err;
  //         res.json({ token });
  //       }
  //     );
  //     next();
  //   }
  //   return res
  //     .status(401)
  //     .json({ msg: "No token or cookie, authorization denied" });
  // }
  if (!token && req.isAuthenticated()) {
    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      config.jwtSecret,
      { expiresIn: "1 day" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
    next();
  } else {
    return res
      .status(401)
      .json({ msg: "No token or cookie, authorization denied" });
  }

  // Verify token
  try {
    jwt.verify(token, config.jwtSecret, (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: "Token is not valid" });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error("something wrong with auth middleware");
    res.status(500).json({ msg: "Server Error" });
  }
};
