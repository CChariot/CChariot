const db = require("../database");

const select = "SELECT * from department WHERE Sup_ID = ($1)";
const selectAll = "SELECT * from department";

class Departments {
  static retrieve(values1, callback) {
    db.query(select, [values1], (err, res) => {
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

  static insert(sup_id, department_name, operating_hour, callback) {
    db.query(
      "INSERT INTO department (Sup_id, department_name, operating_hour) VALUES ($1, $2, $3)",
      [sup_id, department_name, operating_hour],
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }

  static alter(newsup_id, oldsup_id, callback) {
    db.query(
      "UPDATE department SET Sup_ID = ($1) WHERE Sup_ID = ($2);",
      [newsup_id, oldsup_id],
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }
}

module.exports = Departments;
