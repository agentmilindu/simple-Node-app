Simple Node.js app
==================

This is the source code of the simple app that I presented on Microsoft Student Champs Monthly Meeting - November 2013

#### Stuffs to check
1. server.js
2. routs/user.js
3. views / layout.jade
4. views / index.jade
5. views / login.jade
6. public folder

#### server.js
Contains the configurtions and *specially* the Routs
    
    app.get('/', routes.index); http://localhost/ 
    app.get('/users', user.list); http://localhost/users
    app.get('/users/:username', user.profile); http://localhost/users/bill
    
#### routs/user.js
Contains all the controllers of user, defaine what to do when someone send a request to a particular rout

    /*
     * GET localhost/users/:username : users profile.
     */
    exports.profile = function(req, res){
      res.render('profile', {   title: 'Profile', username: req.params.username });
    };
    
When someone sends a HTTP GET request to the URL 'localhost/users/bill', the '/users/:username' rout will catch it and trigger this controller. This controller will render the view called 'profile' and paas a varialble called 'username' with the value that we got with the request ( that is 'bill' in this case). 

