var express = require('express');
var castInfo = require('../cast')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { people : castInfo });
});

module.exports = router;
