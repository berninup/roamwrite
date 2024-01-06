const express = require("express");
const cors = require("cors");
const session = require("express-session");
const pgSession = require('connect-pg-simple')(session);
const path = require("path");
const passport = require("passport");
const userRoutes = require("./routes/user_routes");
const blogRoutes = require("./routes/blog_routes");
const photoRoutes = require("./routes/photo_routes");



const initializePassport = require("./config/passport-config");
const { Client } = require("pg");
initializePassport(passport);

const app = express();
app.use(express.json());

app.use(
  session({
    store: new pgSession({
        conString: process.env.CONSTRING
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/users", userRoutes);
app.use("/blog", blogRoutes);
app.use("/photo", photoRoutes);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(3000, () => {
  console.log("Server is running");
});
