//This code uses the CommonJS module pattern to define a function named render()
//You can require this module and use this function
//You'll need to use Express routing functionality to utilize the controller

var User = require('mongoose').model('User');
//
// Create a new 'create' controller method
exports.create = function (req, res, next) {
    // Create a new instance of the 'User' Mongoose model
    var user = new User(req.body);
    console.log("body: " + req.body.username);

    // Use the 'User' instance's 'save' method to save a new user document
    user.save(function (err) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            res.render('index', {
                title: 'Login page'
            });

            console.log("User saved to DB");
        }
    });
};