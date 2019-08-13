const express = require("express");

const knex = require("knex");

const knexConfig = require("../knexfile");

const db = knex(knexConfig.development);

const router = express.Router();

module.exports = router;
