
const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/" }), (req, res) => {
  res.redirect("/profile");
});

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed", error: err });
    }

    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Session destroy failed", error: err });
      }

      res.clearCookie("connect.sid"); // Important: clear the session cookie
      res.status(200).json({ message: "Logged out successfully" });
    });
  });
});


router.get("/profile", (req, res) => {
  if (!req.user) return res.status(401).json({ message: "Unauthorized" });
  res.status(200).json(req.user);
});

// ✅ Correct export
module.exports = router;
