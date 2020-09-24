const express = require("express");
const fs = require("fs");
const router = express.Router();
const knex = require("../utility/database");

//loading
router.get("/", async (req, res, next) => {
  let searchQuery = req.params.searchQuery;

  res.json("complete");
});
router.post("/", async (req, res, next) => {
  let expenseName = req.body.expenseName;
  let price = req.body.price;
  let category = req.body.category;
  let categoryStatement = await knex("Expense").insert({
    Price: price,
    Name: expenseName.trim(),
    Category: category.trim(),
  });

  res.status(200).send("Registration successful.");
});
router.post("/delete", async (req, res, next) => {
  let ID = req.body.ID;
  await knex("Expense").where("ID", ID).del();

  res.status(200).send("delete  successful.");
});
console.log("Rose: Accessed ChatBox.js ");
module.exports = router;
