const express = require("express");

const controller = require("../controllers/employee.controller")
const router = express.Router();

router.post("/employee",controller.createEmployee);

module.exports = router;