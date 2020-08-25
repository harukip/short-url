const redis = require('redis');
const client = redis.createClient(process.env.REDIS_URL);

client.on("error", function(error){
    console.log(error);
});

function generate_short(input, callback){
    // TODO check input valid
    console.log("input: ", input.toString());
    // TODO check already in db
    client.get(input.toString(), function(err, result){
        let random = null;
        if(err){
            console.log(err);
        }
        console.log("get: ", result);
        if(result !== null && result !== undefined){
            random = result;
        }
        else{
            random = Math.random().toString(36).substr(2,7);
            client.set(input.toString(), random, function(err, res){
                if(err) console.log(err);
            });
            client.set(random, input.toString(), function(err, res){
                if(err) console.log(err);
                console.log("New key added.");
            });
        }
        console.log("return: ", random);
        callback(random);
    });
}
module.exports=generate_short;