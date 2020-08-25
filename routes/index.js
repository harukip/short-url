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
    if(url !== null)
      res.render('index', {title: 'Short-url', result: 'short-url created:', url: 'http://localhost:3000/r/'+url});
    else
      res.render('index', {title: 'Short-url', result: 'url pattern not match, please retry.', url: ''});
  });
});

module.exports = router;
