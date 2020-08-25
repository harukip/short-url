var express = require('express');
var router = express.Router();
var redirect = require('../models/redirect');

/* GET */
router.get('/*', function(req, res, next) {
  // TODO check req path

  let result = redirect(req.path);
  res.redirect(result);
});

module.exports = router;