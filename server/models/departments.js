const db = require("../database");

const select = "SELECT * from department WHERE Emp_ID = ($1) AND Sup_ID = ($2)";

class Departments {
  static retrieve(values1, value2, callback) {
    db.query(select, [values1, value2], (err, res) => {
      if (err.error) return callback(err);
      callback(res);
    });
  }

  static insert(emp_id, sup_id, department_name, operating_hour, callback) {
    db.query(
      "INSERT INTO department (Emp_ID, Sup_id, department_name, operating_hour) VALUES ($1, $2, $3, $4)",
      [emp_id, sup_id, department_name, operating_hour],
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }
}

module.exports = Departments;
