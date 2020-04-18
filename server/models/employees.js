const db = require("../database");

const select = "SELECT * from employees WHERE Emp_ID = ($1)";
const selectAll = "SELECT * from employees ORDER BY EMP_ID";

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

  static insert(
    emp_id,
    last_name,
    first_name,
    dob,
    rest_day,
    department,
    hourly_rate,
    callback
  ) {
    db.query(
      "INSERT INTO employees (Emp_ID, last_name, first_name, dob, rest_day, department, hourly_rate) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [emp_id, last_name, first_name, dob, rest_day, department, hourly_rate],
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }
  static update(
    emp_id,
    last_name,
    first_name,
    dob,
    rest_day,
    department,
    hourly_rate,
    callback
  ) {
    db.query(
      "UPDATE employees SET last_name=$2, first_name=$3, dob=$4, rest_day=$5, department=$6, hourly_rate=$7 WHERE EMP_ID = $1",
      [emp_id, last_name, first_name, dob, rest_day, department, hourly_rate],
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }
  static drop(emp_id, callback) {
    db.query(
      "DELETE FROM employees WHERE Emp_ID = ($1)",
      [emp_id],
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }
}

module.exports = Employees;
