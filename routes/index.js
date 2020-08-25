var express = require('express');
var router = express.Router();
var short = require('../models/short');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Short-url', result: '', url: '' });
});

/* POST */
router.post('/', function(req, res, next){
  let url = short(req.body.url_input.text);
  res.render('index', {title: 'Short-url', result: 'short-url created:', url: 'http://yu.hao/'+url});
});

module.exports = router;
