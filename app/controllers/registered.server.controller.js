//This code uses the CommonJS module pattern to define a function named render()
//You can require this module and use this function
//You'll need to use Express routing functionality to utilize the controller
exports.render = function (req, res) {
    //make a reference to the session object
    var session = req.session;
    console.log("In index function - User name = " + session.username);

    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var username = req.body.username;
    var feedback = req.body.password;


    res.render('index', {
        title: 'Login page'

    });

    console.log("GET request to Login");
};