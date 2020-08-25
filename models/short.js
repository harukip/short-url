
function generate_short(input){
    // TODO check input valid

    // TODO check already in db

    // Generate short
    let random = Math.random().toString(36).substr(2,7);
    // TODO save to db
    
    return random;
}
module.exports=generate_short;