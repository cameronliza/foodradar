module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
      //check if jsonwebtoken has expired if it has then create another onw otherwise
    }

    return res.status(401).json({
      error_msg: "Please log in to view that resource",
    });
  },
  forwardAuthenticated: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect("/home");
  },
};

//if cookie is expired then jsonweb token is expired as well
//on logout client side delete the jwtwebtoken ,
//we will have a cookie route and

//userauth check if the cookie is still working and then goes here
//if ensureAuthicated is working then checks if !token then make a new token otherwise vertify and give us the user info

//check if jwt is verifyed by adding jwt middleware to route
//if it authenicated then next ()
//if its not then check if  (req.isAthenicated()(cookie)) ? make a new token : login in
