const express = require("express");
const fs = require("fs");
const router = express.Router();
const knex = require("../utility/database");

sqlDateToJSDate = (sqlDateString) => {
  dateString = sqlDateString.toString();

  dateString = dateString.replace(/:/g, "-");

  dateString = dateString.replace(/ /g, "-");
  let YMDhms = dateString.split("-");
  let month;
  let monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  for (let i = 0; i < monthArray.length; i++) {
    if (YMDhms[1] == monthArray[i]) {
      month = i;
      break;
    }
  }

  let date = new Date();
  date.setFullYear(parseInt(YMDhms[3]), month, parseInt(YMDhms[2]));
  date.setHours(
    parseInt(YMDhms[4]),
    parseInt(YMDhms[5]),
    parseInt(YMDhms[6]),
    0 /*msValue*/
  );
  return date;
};

//loading
router.get("/", async (req, res, next) => {
  console.log("!!!");
  let resp = {
    orderByDate: [],
    orderByPrice: [],
    orderByCategory: [],
    orderByAlphabet: [],
  };
  //order by date
  let orderByDate = await knex
    .select()
    .from("Expense")
    .orderBy("CurrentDate", "desc");

  //order by price
  let orderByPrice = await knex.select().from("Expense").orderBy("Price");

  //order by category
  let orderByCategory = await knex.select().from("Expense").orderBy("Category");

  //order by name
  let orderByAlphabet = await knex.select().from("Expense").orderBy("Name");
  for (let i = 0; i < orderByDate.length; i++) {
    resp.orderByDate[i] = {
      Name: orderByDate[i].Name,
      Price: orderByDate[i].Price,
      Category: orderByDate[i].Category,
      ID: orderByDate[i].ID,

      Date: sqlDateToJSDate(orderByDate[i].CurrentDate).toString().slice(0, 25),
    };
    resp.orderByPrice[i] = {
      Name: orderByPrice[i].Name,
      Price: orderByPrice[i].Price,
      Category: orderByPrice[i].Category,
      ID: orderByPrice[i].ID,

      Date: sqlDateToJSDate(orderByPrice[i].CurrentDate).toString(),
    };
    resp.orderByCategory[i] = {
      Name: orderByCategory[i].Name,
      Price: orderByCategory[i].Price,
      Category: orderByCategory[i].Category,
      ID: orderByCategory[i].ID,
      Date: sqlDateToJSDate(orderByCategory[i].CurrentDate).toString(),
    };
    resp.orderByAlphabet[i] = {
      Name: orderByAlphabet[i].Name,
      Price: orderByAlphabet[i].Price,
      Category: orderByAlphabet[i].Category,
      ID: orderByAlphabet[i].ID,
      Date: sqlDateToJSDate(orderByAlphabet[i].CurrentDate).toString(),
    };
  }
  console.log(resp.orderByCategory);
  res.json(resp);
});

console.log("Rose: Accessed ChatBox.js ");
module.exports = router;
