const express = require('express');
const router = express.Router();
const redis = require('redis');
const client = redis.createClient(process.env.REDIS_URL);

client.on("error", function(error){
  console.log(error);
})

/* GET */
router.get('/*', function(req, response, next) {
  // TODO check req path
  let key = req.path.slice(1);
  console.log("key: ", key);
  client.get(key, function(err, res){
    console.log("get: ", res);
    if(err) console.log(err);
    if(res !== null){
      response.redirect(res);
    }
    else{
      response.send(404);
    }
  });
});

module.exports = router;