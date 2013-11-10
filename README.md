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
    
    app.get('/', routes.index); // localhost/ 
    app.get('/users', user.list); // localhost/users
    app.get('/users/:username', user.profile); // localhost/users/bill
    
#### routs/user.js
Contains all the controllers of user, define  what to do when someone send a request to a particular rout

    /*
     * GET localhost/users/:username : users profile.
     */
    exports.profile = function(req, res){
      res.render('profile', {   title: 'Profile', username: req.params.username });
    };
    
When someone sends a HTTP GET request to the URL 'localhost/users/bill', the '/users/:username' rout will catch it and trigger this controller. This controller will render the view called 'profile' and pass a variable called 'username' with the value that we got with the request ( that is 'bill' in this case). 

#### views / layout.jade
Contains the jade codes for the main template of the site. This Jade codes will be converted into HTML by Jade Template Engine. 

#### views / login.jade
This extends the layout.jade and overrides  the 'content' block.

#### Public folder
Holds all the static files like CSS, JS, images, etc.


