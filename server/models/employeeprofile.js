const db = require("../database");

const select =
  "SELECT Emp_ID, Sup_ID, department_name, hourly_rate FROM employees JOIN department ON employees.department = department.department_name AND Emp_ID = ($1)";

class Employeeprofile {
  static retrieve(values, callback) {
    db.query(select, [values], (err, res) => {
      if (err.error) return callback(err);
      callback(res);
    });
  }

  static insert(emp_id, sup_id, department_name, hourly_rate, callback) {
    db.query(
      "INSERT INTO employees_profile (Emp_ID, Sup_ID, Department_name,Hourly_Rate) VALUES ($1, $2, $3, $4)",
      [emp_id, sup_id, department_name, hourly_rate],
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }
}

module.exports = Employeeprofile;
