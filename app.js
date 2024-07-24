const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "restaurant.db",
});

// async IIFE
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database successful!");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
})();

const app = express();

//// to use not important to remember ^^'
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
/// for midleware undefine to - object

app.use(express.static("public"));

app.set("view engine", "pug");

const routes = require("./routes");

app.use(routes);

//error traitement

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render("error");
});

app.listen(3000, () => {
  console.log("server on");
});
