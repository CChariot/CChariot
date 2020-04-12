var express = require("express");
var Departments = require("../models/departments");

var router = express.Router();

router.get("/:Sup_id", (req, res) => {
  var Sup_id = req.params.Sup_id;

  Departments.retrieve(Sup_id, (respond) => {
    return res.json(respond);
  });
});

router.get("/", (req, res) => {
  Departments.retrieveAll((respond) => {
    return res.json(respond);
  });
});

router.post("/", (req, res) => {
  var Sup_id = req.body.Sup_id;
  var department_name = req.body.department_name;
  var operating_hour = req.body.operating_hour;

  Departments.insert(Sup_id, department_name, operating_hour, (respond) => {
    return res.json(respond);
  });
});

router.post("/update", (req, res) => {
  var newsup_id = req.body.newsup_id;
  var oldsup_id = req.body.oldsup_id;

  Departments.alter(newsup_id, oldsup_id, (respond) => {
    return res.json(respond);
  });
});

module.exports = router;
