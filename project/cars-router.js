const express = require("express");

const knex = require("knex");

const knexConfig = require("../knexfile");

const db = knex(knexConfig.development);

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "It's working. IT'S WORKING" });
});

router.get("/cars", (req, res) => {
  db("cars")
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      res.status(500).json({ message: "Unable to retrieve cars" });
    });
});

module.exports = router;
