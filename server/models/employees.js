const db = require("../database");

const select = "SELECT * from employees WHERE Emp_ID == '$1'";

class Employees {
  static retrieve(values, callback) {
    db.query(select, [values], (err, res) => {
      if (err.error) return callback(err);
      callback(res);
    });
  }

  static insert(employee, last_name, first_name, dob, rest_day, callback) {
    db.query(
      "INSERT INTO employees (Emp_ID, last_name, first_name, dob, rest_day) VALUES ($1, $2, $3, $4, $5)",
      [employee, last_name, first_name, dob, rest_day],
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }
}

module.exports = Employees;
