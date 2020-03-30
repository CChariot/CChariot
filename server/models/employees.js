const db = require("../database");

class Employees {
  static retrieveAll(callback) {
    db.query("SELECT Emp_ID from employees", (err, res) => {
      if (err.error) return callback(err);
      callback(res);
    });
  }

  static insert(employee, callback) {
    db.query(
      "INSERT INTO employees (Emp_ID) VALUES ($1)",
      [employee],
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }
}

module.exports = Employees;
