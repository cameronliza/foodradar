const express = require("express");
const mongoose = require("mongoose");
const db = require("./config/default.json").mongoURI;
const session = require("express-session");
const passport = require("./config/passport");
const cors = require("cors");
const MongoStore = require("connect-mongo");
const path = require("path");

const app = express();

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB is Connected"))
  .catch((err) => console.log(err));

// app.use(express.static(path.join(__dirname, "..", "build")));
// app.use(express.static("public"));
//express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "A secret is here",
    resave: false,
    saveUninitialized: false,
    //this is needed to make the session persist. Otherwise everytime you make changes
    //or change url you'll have to resave
    store: MongoStore.create({ mongoUrl: db }),
  })
);
//Credentials makes your cookie avaible client side
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
//passport
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/user", require("./routes/user"));
app.use("/profile", require("./routes/profile"));

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on ${PORT}`));
