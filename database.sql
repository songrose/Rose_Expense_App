CREATE DATABASE expensesDB;
USE expensesDB;
DROP TABLE IF EXISTS Expense
DROP TABLE IF EXISTS Category;
DROP TABLE IF EXISTS Price;


CREATE TABLE Expense(
ID INT AUTO_INCREMENT PRIMARY KEY
,CurrentDate DATETIME DEFAULT CURRENT_TIMESTAMP
,Price Decimal(15,2) NOT NULL
,Category VARCHAR(200) NOT NULL
);