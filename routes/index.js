var express = require('express');
var router = express.Router();
var short = require('../models/short');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Short-url', result: '', url: '' });
});

/* POST */
router.post('/', function(req, res, next){
  short(req.param('url_input', null), function(url){
    res.render('index', {title: 'Short-url', result: 'short-url created:', url: 'http://localhost:3000/r/'+url});
  });
});

module.exports = router;
