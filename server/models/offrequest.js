const db = require("../database");

const select = "SELECT * from offrequest WHERE Request_ID = ($1)";

class Request {
  static retrieve(values, callback) {
    db.query(select, [values], (err, res) => {
      if (err.error) return callback(err);
      callback(res);
    });
  }

  static insert(Request_ID, Request_DATE, Emp_ID, callback) {
    db.query(
      "INSERT INTO offrequest (Request_ID, Request_DATE, Emp_ID) VALUES ($1, $2, $3)",
      [Request_ID, Request_DATE, Emp_ID],
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }
}

module.exports = Request;
