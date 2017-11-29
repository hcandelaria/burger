DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
  id INTEGER auto_increment PRIMARY KEY,
  burger_name VARCHAR(100),
  devoured BOOLEAN,
  burger_date TIMESTAMP
);
