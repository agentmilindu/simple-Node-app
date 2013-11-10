
/*
 * GET localhost/users : users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

/*
 * GET localhost/users/login : users login form.
 */
exports.login = function(req, res){
  res.render('login', {   title: 'Login', message : req.session.msg  });
};

/*
 * GET localhost/users/dash : users dashboard.
 */
exports.dash = function(req, res){
  if (req.session.user) { 
        res.render('dash', {   title: 'Dash', username: req.session.user.username });
    }
    //
    else{
        req.session.msg = "Please login first"
        res.redirect("/users/login")
    }
};

/*
 * POST localhost/users/logger : users logger.
 */
exports.logger = function (req, res) {
    if (req.body.name=="admin" && req.body.password=="123") { 
        req.session.user = { username: req.body.name }
        res.redirect("/users/dash")
    }
    //
    else{
        req.session.msg = "username password missmatch"
        res.redirect("/users/login")
    } 
};

/*
 * GET localhost/users/logout : user log out.
 */
exports.logout = function(req, res){
  req.session.destroy();
  res.redirect("/")
};

/*
 * GET localhost/users/:username : users profile.
 */
exports.profile = function(req, res){
  res.render('profile', {   title: 'Profile', username: req.params.username });
};