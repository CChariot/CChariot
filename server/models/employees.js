const db = require("../database");

const select = "SELECT * from employees WHERE Emp_ID = ($1)";
const selectAll = "SELECT * from employees";

class Employees {
  static retrieve(values, callback) {
    db.query(select, [values], (err, res) => {
      if (err.error) return callback(err);
      callback(res);
    });
  }

  static retrieveAll(callback) {
    db.query(selectAll, (err, res) => {
      if (err.error) return callback(err);
      callback(res);
    });
  }

  static insert(emp_id, last_name, first_name, dob, rest_day, department, callback) {
    db.query(
      "INSERT INTO employees (Emp_ID, last_name, first_name, dob, rest_day, department) VALUES ($1, $2, $3, $4, $5, $6)",
      [emp_id, last_name, first_name, dob, rest_day, department],
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }
}

module.exports = Employees;
