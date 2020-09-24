const dotenv = require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");

const AddExpenseRouter = require("./routes/AddExpense");
const ViewExpenseRouter = require("./routes/ViewExpense");

const port = 3001;
const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", AddExpenseRouter);
app.use("/ViewExpense", ViewExpenseRouter);
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
module.exports = app;
