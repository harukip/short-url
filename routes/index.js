var express = require('express');
var router = express.Router();
var short = require('../models/short');
const title = "Short-url service by yuhao";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: title, result: '', url: '' });
});

/* POST */
router.post('/', function(req, res, next){
  let host = req.host;
  if(host === "localhost") host += ":3000";
  short(req.param('url_input', null), function(url){
    if(url !== null)
      res.render('index', {title: title, result: 'short-url created:', url: 'http://'+ host +'/r/'+ url});
    else
      res.render('index', {title: title, result: 'url pattern not match, please retry.', url: ''});
  });
});

module.exports = router;
