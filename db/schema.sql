DROP DATABASE IF EXISTS cafe_db;
CREATE DATABASE cafe_db;

USE cafe_db;

CREATE TABLE departments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30)
);

CREATE TABLE roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES departments(id)
  ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  FOREIGN KEY (manager_id)
  REFERENCES employees(id)
  ON DELETE SET NULL ON UPDATE CASCADE,
  FOREIGN KEY (role_id)
  REFERENCES roles(id)
  ON DELETE SET NULL ON UPDATE CASCADE
);