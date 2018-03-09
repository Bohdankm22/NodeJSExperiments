//This code uses the CommonJS module pattern to define a function named render()
//You can require this module and use this function
//You'll need to use Express routing functionality to utilize the controller
exports.render = function (req, res) {
    //make a reference to the session object
    var session = req.session;

    var feedback = req.body.feedback;
    var fname = session.firstName;
    var lname = session.lastName;
    var fpizza = req.body.fpizza;
    var fflower = req.body.fflower;

    console.log("In index function - User name = " + session.username);
    //check if session object contains the username

    //display the ejs page
    res.render('thankyou', {
        title: 'Thank you page',
        feedback: feedback,
        lname: lname,
        fname: fname,
        fpizza: fpizza,
        fflower: fflower
    });
    
    console.log("GET request - User name = " + session.username);

};