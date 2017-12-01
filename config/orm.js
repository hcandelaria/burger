//Packages
const connection = require('../config/connection.js');

// Helper function for SQL syntax.
//Creates ?
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}
//orm
var orm = {
  //tableInput table to return from db
  //cb function to be called after
  all: function(tableInput, cb) {
    let queryString = "SELECT * FROM " + tableInput + ";";

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  //table to make changes on
  //cols to edit
  //values to add to cols
  //cb function to be called after
  create: function(table, cols, vals, cb) {

    let queryString = `INSERT INTO ${table} (${cols.toString()})` +
                      ` VALUES (${printQuestionMarks(vals.length)})`;

    connection.query(queryString, vals, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  //table to make changes on
  //objColVals Col and new values
  //condition to specify what cols needs the updated values
  //cb function to be called after
  update: function(table, objColVals, condition, cb) {

    let queryString = `UPDATE ${table} SET ${objToSql(objColVals)}` +
                      ` WHERE ${condition}`;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  //table to make changes on
  //condition to specify which row to delete
  //cb function to be called after
  delete: function(table, condition, cb) {
    let queryString = `DELETE FROM ${table} WHERE ${condition}`;

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
