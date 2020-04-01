const db = require("../database");

class Department {
  static retrieveAll(employee, supervisor, callback) {
    db.query(
      "SELECT * from employees WHERE Emp_ID == ($1) AND Sup_ID == ($2)",
      [employee],
      [supervisor],
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }

  static insert(employee, supervisor, department, operating_hour, callback) {
    db.query(
      "INSERT INTO employees (Emp_ID, Sup_ID, department_name, operating_hour) VALUES ($1, $2, $3, $4, $5)",
      [employee, last_name, first_name, dob, rest_day],
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }
}

module.exports = Department;
