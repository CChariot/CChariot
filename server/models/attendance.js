const db = require("../database");
//query to check all attendance record of certain employee.
const select = "SELECT * from attendance WHERE Emp_ID = ($1)";
//query to check attandance record.
const selectAll = "SELECT * from attendance";

class Attendance {
  static retrieveAll(callback) {
    db.query(selectAll, (err, res) => {
      if (err.error) return callback(err);
      callback(res);
    });
  }

  static retrieve(values, callback) {
    db.query(select, [values], (err, res) => {
      if (err.error) return callback(err);
      callback(res);
    });
  }

  static checkin(date, Emp_ID, checkin, callback) {
    db.query(
      "INSERT INTO attendance VALUES ($1, $2, $3)",
      [date, Emp_ID, checkin],
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }

  static checkout(Emp_ID, checkout, callback) {
    db.query(
      //query to enter checkout time into the database.
      `UPDATE attendance
        SET Check_out = '${checkout}'
        WHERE attendance.Emp_ID = ${Emp_ID};`,
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }

  static lunchout(Emp_ID, lunchout, callback) {
    db.query(
      //query to log lunch break start time
      `UPDATE attendance
        SET Lunch_out = '${lunchout}'
        WHERE attendance.Emp_ID = ${Emp_ID};`,
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }

  static lunchback(Emp_ID, lunchback, callback) {
    db.query(
      //query to log lunch break end time
      `UPDATE attendance
        SET Lunch_back = '${lunchback}'
        WHERE attendance.Emp_ID = ${Emp_ID};`,
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }
}

module.exports = Attendance;
