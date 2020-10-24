module.exports.home = function(req,res){

    console.log(req.cookies);
    res.cookie('user', 05);
    return res.render('home',{
        title: "home"
    });
}

//module.exports.actionName = function(req,res){}

module.exports.printHello = function(req,res){
    return res.end("hello");
}