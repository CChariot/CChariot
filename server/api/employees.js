var express = require("express");
var Employees = require("../models/employees");

var router = express.Router();

router.get("/:emp_id", (req, res) => {
  var emp_id = req.params.emp_id;

  Employees.retrieve(emp_id, (err, employees) => {
    if (err) return res.json(err);
    return res.json(employees);
  });
});

router.post("/", (req, res) => {
  var employee = req.body.employee;
  var last_name = req.body.last_name;
  var first_name = req.body.first_name;
  var dob = req.body.bod;
  var rest_day = req.body.rest_day;

  Employees.insert(
    employee,
    last_name,
    first_name,
    dob,
    rest_day,
    (err, result) => {
      if (err) return res.json(err);
      return res.json(result);
    }
  );
});

module.exports = router;
