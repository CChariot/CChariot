var express = require("express");
var Employeeprofile = require("../models/employeeprofile");

var router = express.Router();

router.get("/:Emp_ID", (req, res) => {
  var Emp_ID = req.params.Emp_ID;

  Employeeprofile.retrieve(Emp_ID, (err, employees) => {
    if (err) return res.json(err);
    return res.json(employees);
  });
});

router.post("/", (req, res) => {
  var Emp_ID = req.body.Emp_ID;
  var Sup_ID = req.body.Sup_ID;
  var Department_Name = req.body.Department_Name;
  var Hourly_Rate = req.body.Hourly_Rate;

  Employeeprofile.insert(
    Emp_ID,
    Sup_ID,
    Department_Name,
    Hourly_Rate,
    (err, result) => {
      if (err) return res.json(err);
      return res.json(result);
    }
  );
});

module.exports = router;
