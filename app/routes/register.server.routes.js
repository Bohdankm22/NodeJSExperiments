//This uses CommonJS module pattern to export a single module function.display
//This function takes an express object as argument 
//Then it requires the index controller and uses its render() method
//as a middleware to GET requests made to the root path.

module.exports = function (app) {
    //load the controllers
    var login = require('../controllers/register.server.controller');
    var register = require('../controllers/registered.server.controller');


    //handle the routing of get
    app.get('/register', login.render);
    app.post('/register', register.create);
};
