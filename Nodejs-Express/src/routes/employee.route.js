const express = require("express");

const controller = require("../controllers/employee.controller");
const { employee } = require("../services/db.service");
const router = express.Router();

router.post("/employee",controller.createEmployee);


module.exports = router;