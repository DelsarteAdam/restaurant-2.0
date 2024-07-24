const express = require("express");
const router = express.Router();

const fs = require("node:fs");

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
