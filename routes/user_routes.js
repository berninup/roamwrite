const express = require("express");
const router = express.Router();
const { User } = require("../models/index_model");
const passport = require("passport");
const bcrypt = require("bcrypt");

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
      }
      if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
      req.logIn(user, (err) => {
        if (err) {
          return res.status(500).json({ message: 'Error logging in' });
        }
        return res.status(200).json({ message: 'Login successful', user: user });
      });
    })(req, res, next);
  });

router.post("/create", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.json({ message: "You have been successfully logged out." });
  });
});

router.get("/profile", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(403).json({ message: "Not authenticated" });
  }

  const userId = req.session.passport.user;

  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const userProfile = {
        username: user.username,
        email: user.email,
      };
      res.json(userProfile);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});
module.exports = router;
