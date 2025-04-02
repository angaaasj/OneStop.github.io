const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "مرحبًا بكم في OneStop!" });
});

module.exports = router;