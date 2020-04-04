var express = require("express");
var Departments = require("../models/departments");

var router = express.Router();

router.get("/:Emp_id/:Sup_id", (req, res) => {
  var Emp_id = req.params.Emp_id;
  var Sup_id = req.params.Sup_id;

  Departments.retrieve(Emp_id, Sup_id, (err, employees) => {
    if (err) return res.json(err);
    return res.json(employees);
  });
});

router.get("/", (req, res) => {
  Departments.retrieveAll((err, employees) => {
    if (err) return res.json(err);
    return res.json(employees);
  });
});

router.post("/", (req, res) => {
  var Emp_id = req.body.Emp_id;
  var Sup_id = req.body.Sup_id;
  var department_name = req.body.department_name;
  var operating_hour = req.body.operating_hour;

  Departments.insert(
    Emp_id,
    Sup_id,
    department_name,
    operating_hour,
    (err, result) => {
      if (err) return res.json(err);
      return res.json(result);
    }
  );
});

module.exports = router;
