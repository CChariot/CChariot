var express = require("express");
var Attendance = require("../models/attendance");

var router = express.Router();

router.get("/:Emp_ID", (req, res) => {
  var Emp_ID = req.params.Emp_ID;

  Attendance.retrieve(Emp_ID, (respond) => {
    return res.json(respond);
  });
});

router.post("/", (req, res) => {
  var date = req.body.date;
  var Emp_ID = req.body.Emp_ID;
  var checkin = req.body.checkin;

  Attendance.checkin(date, Emp_ID, checkin, (respond) => {
    return res.json(respond);
  });
});

router.post("/", (req, res) => {
  var date = req.body.date;
  var Emp_ID = req.body.Emp_ID;
  var checkout = req.body.checkout;

  Attendance.checkout(date, Emp_ID, checkout, (respond) => {
    return res.json(respond);
  });
});

module.exports = router;
