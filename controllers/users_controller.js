const User = require('../models/user');
module.exports.posts = function(req,res){
    return res.render("posts",{
        title: "posts page"
    })
}
module.exports.profilePage= function(req,res){
    return res.render("profile_page",{
        title: "profile page"
    })
}

//render signup page
module.exports.signUp = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_signup',{
        title: "Sign Up"
    })
}
//render signin page
module.exports.signIn = function(req,res){
    if(req.isAuthenticated()){
       return  res.redirect('/users/profile');
    }
    return res.render('user_signin',{
        title: "Sign In"
    });
}
//get sign up data
module.exports.create = function(req,res){
   console.log(req.body); 
    if(req.body.password != req.body.confirmPassword){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err,user){
        if(err){
            console.log("error in finding user in sign up");
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log("error in creating a user in sign up");
                    return;
                }
                return res.redirect('/users/sign-in')

            })
        } else{
            return res.redirect('back');
        }
    })
    
}
//sign in and create session for user
module.exports.createSession= function(req,res){
    return res.redirect('/');
}

module.exports.destroySession = function(req,res){
    req.logout();
    return res.redirect('/');
}