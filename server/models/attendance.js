const db = require("../database");

const select = "SELECT * from attendance WHERE Emp_ID = ($1)";

class Attendance {
  static retrieve(values, callback) {
    db.query(select, [values], (err, res) => {
      if (err.error) return callback(err);
      callback(res);
    });
  }

  static checkin(date, emp_id, check_in, callback) {
    db.query(
      "INSERT INTO attendance (date, Emp_ID, check_in) VALUES ($1, $2, $3)",
      [date, emp_id, check_in],
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }

  static checkout(date, emp_id, check_out, callback) {
    db.query(
      "INSERT INTO attendance (date, Emp_ID, check_out) VALUES ($1, $2, $3)",
      [date, emp_id, check_out],
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }
}

module.exports = Attendance;
