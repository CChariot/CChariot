var express = require("express");
var Employees = require("../models/employees");

var router = express.Router();

router.get("/:emp_id", (req, res) => {
  var emp_id = req.params.emp_id;

  Employees.retrieve(emp_id, (respond) => {
    return res.json(respond);
  });
});

router.get("/", (req, res) => {
  Employees.retrieveAll((respond) => {
    return res.json(respond);
  });
});

router.post("/", (req, res) => {
  var emp_id = req.body.emp_id;
  var last_name = req.body.last_name;
  var first_name = req.body.first_name;
  var dob = req.body.dob;
  var rest_day = req.body.rest_day;
  var department = req.body.department;
  var hourly_rate = req.body.hourly_rate;

  Employees.insert(
    emp_id,
    last_name,
    first_name,
    dob,
    rest_day,
    department,
    hourly_rate,
    (respond) => {
      return res.json(respond);
    }
  );
});

router.post("/delete", (req, res) => {
  var Emp_ID = req.body.Emp_ID;

  Employees.drop(Emp_ID, (respond) => {
    return res.json(respond);
  });
});

module.exports = router;
