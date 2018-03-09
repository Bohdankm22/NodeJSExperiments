//This code uses the CommonJS module pattern to define a function named render()
//You can require this module and use this function
//You'll need to use Express routing functionality to utilize the controller

var Feedback = require('mongoose').model('Feedback');

exports.render = function (req, res) {
    //make a reference to the session object
    var session = req.session;

    var feedback = req.body.feedback;
    var fname = session.firstName;
    var lname = session.lastName;
    var fpizza = req.body.fpizza;
    var fflower = req.body.fflower;
    req.username = session.username;
    var feed = new Feedback(req.body);

    console.log("In index function - User name = " + session.username);
    //check if session object contains the username

    // Use the 'User' instance's 'save' method to save a new user document
    feed.save(function (err) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            //display the ejs page
            res.render('thankyou', {
                title: 'Thank you page',
                feedback: feedback,
                lname: lname,
                fname: fname,
                fpizza: fpizza,
                fflower: fflower
            });

            console.log("Feedback saved to DB");
        }
    });

    console.log("GET request - User name = " + session.username);

};