//This code uses the CommonJS module pattern to define a function named render()
//You can require this module and use this function
//You'll need to use Express routing functionality to utilize the controller
exports.render = function (req, res) {
    //make a reference to the session object
    var session = req.session;
    console.log("In index function - User name = " + session.username);
    //check if session object contains the username
    if (!session.username) {
        res.redirect('/login');
    }
    else {
        
        //display the ejs page
        res.render('feedback', {
            title: 'Feedback page',
            email: session.username
        });
        
    }

    
    console.log("GET request - User name = " + session.username);

};