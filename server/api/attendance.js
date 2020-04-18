var express = require("express");
var Attendance = require("../models/attendance");

var router = express.Router();

router.get("/", (req, res) => {

  Attendance.retrieveAll(Emp_ID, (respond) => {
    return res.json(respond);
  });
});

router.get("/:Emp_ID", (req, res) => {
  var Emp_ID = req.params.Emp_ID;

  Attendance.retrieve(Emp_ID, (respond) => {
    return res.json(respond);
  });
});


router.post("/checkin", (req, res) => {
  var date = req.body.date;
  var Emp_ID = req.body.Emp_ID;
  var checkin = req.body.checkin;

  Attendance.checkin(date, Emp_ID, checkin, (respond) => {
    return res.json(respond);
  });
});


router.post("/checkout", (req, res) => {
  var Emp_ID = req.body.Emp_ID;
  var checkout = req.body.checkout;

  Attendance.checkout(Emp_ID, checkout, (respond) => {
    return res.json(respond);
  });
});


router.post("/lunchout", (req, res) => {
  var Emp_ID = req.body.Emp_ID;
  var lunchout = req.body.lunchout;

  Attendance.lunchout(Emp_ID, lunchout, (respond) => {
    return res.json(respond);
  });
});


router.post("/lunchback", (req, res) => {
  var Emp_ID = req.body.Emp_ID;
  var lunchback = req.body.lunchback;

  Attendance.lunchback(Emp_ID, lunchback, (respond) => {
    return res.json(respond);
  });
});

module.exports = router;
