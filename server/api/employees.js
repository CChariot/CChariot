var express = require("express");
var Employees = require("../models/employees");

var router = express.Router();

router.get("/", (req, res) => {
  Employees.retrieveAll((err, employees) => {
    if (err) return res.json(err);
    return res.json(employees);
  });
});

router.post("/", (req, res) => {
  var employee = req.body.employee;

  Employees.insert(employee, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

module.exports = router;
