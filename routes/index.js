'use strict'

var express = require('express');
var router = express.Router();
const pg = require('../db/knex_config.js')
var data = require('../twilio.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  data.sendText()
});

module.exports = router;
