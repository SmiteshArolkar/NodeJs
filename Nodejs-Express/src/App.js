
const express = require("express");

const config = require("./config/config");

const employeeRouter = require("./routes/employee.route");

const bodyParser = require("body-parser");

const databaseServices = require("./services/db.service");

databaseServices.sequelize.sync({ force: true }).then(() => {
    console.log("Database Linked")
})

const app = express();
const port = config.port;

app.use(employeeRouter);
app.use(require('body-parser').urlencoded({ extended: false }));

app.use(bodyParser.json());
app.listen(port, () => {
  console.log("Listening on Port : ", port);
});
