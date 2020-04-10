var express = require("express");
var Request = require("../models/offrequest");

var router = express.Router();

router.get("/:Request_ID", (req, res) => {
  var Request_ID = req.params.Request_ID;

  Request.retrieve(Request_ID, (respond) => {
    return res.json(respond);
  });
});

router.post("/", (req, res) => {
  var Request_ID = req.body.Request_ID;
  var Request_DATE = req.body.Request_DATE;
  var Emp_ID = req.body.Emp_ID;

  Request.insert(Request_ID, Request_DATE, Emp_ID, (respond) => {
    return res.json(respond);
  });
});

module.exports = router;
