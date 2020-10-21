module.exports.home = function(req,res){
    return res.end('<h1>express is up</h1>');
}

//module.exports.actionName = function(req,res){}

module.exports.printHello = function(req,res){
    return res.end("hello");
}