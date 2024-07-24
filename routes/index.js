const express = require("express");
const router = express.Router();

const fs = require("node:fs");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/menu", (req, res) => {
  res.render("menu");
});

router.get("/restaurant", (req, res) => {
  res.render("restaurant");
});

router.get("/pictures", (req, res) => {
  res.render("pictures");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/admin", (req, res) => {
  res.render("backoffice");
});

module.exports = router;
