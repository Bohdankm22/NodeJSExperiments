//This code uses the CommonJS module pattern to define a function named render()
//You can require this module and use this function
//You'll need to use Express routing functionality to utilize the controller
exports.render = function (req, res) {
    //make a reference to the session object
    var session = req.session;

    var username = session.username;
    var email = req.body.email;
    var feedback = req.body.feedback;
    //store username in session object
    session.username = username;
    console.log("In index function - User name = " + session.username);
    //check if session object contains the username

    //display the ejs page
    res.render('thankyou', {
        title: 'Thank you page',
        username: username,
        email: email,
        feedback: feedback
    });
    
    console.log("GET request - User name = " + session.username);

};