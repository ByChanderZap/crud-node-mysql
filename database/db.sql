-- creating database
CREATE DATABASE crudnodejs;

-- Using database
use crudnodejs;

-- Creating table
CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR (100) NOT NULL,
    phone VARCHAR(15)
);

--  to show all tables
SHOW TABLES;

-- To describe tables
describe customer;