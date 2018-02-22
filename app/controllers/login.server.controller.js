//This code uses the CommonJS module pattern to define a function named render()
//You can require this module and use this function
//You'll need to use Express routing functionality to utilize the controller

var User = require('mongoose').model('User');

exports.render = function (req, res) {
    //make a reference to the session object
    var session = req.session;
    // get parameters from request
    var username = req.body.username;
    var password = req.body.password;

    //store the username in session object
    session.username = username;
    console.log("username in session: " + session.username);

    User.findOne({'username': username, 'password': password}, function (err, user) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else if (user != null) {
            console.log("Found user by username and password: " + username);
            // Saving First and Last name into the session
            session.firstName = user.firstName;
            session.lastName = user.lastName;

            res.render('feedback', {
                title: 'Feedback page',
                username: user.username
            });
        }
    });

    //res.redirect('/feedback');
    //res.end('done');
};