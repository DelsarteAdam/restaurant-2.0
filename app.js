const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "restaurant.db",
  //logging: false // disable logging
});

// Movie model
class Contacts extends Sequelize.Model {}
Contacts.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Date: { type: Sequelize.DATE },
    Name: { type: Sequelize.STRING },
    Email: { type: Sequelize.STRING },
    Message: { type: Sequelize.STRING },
  },
  { sequelize }
); // same as { sequelize: sequelize }

// DATE data type accepts a date value provided in yyyy-mm-dd hh:mm:ss format,
// while DATEONLY accepts a date value in yyyy-mm-dd format (DATE without time)

// async IIFE
(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
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
