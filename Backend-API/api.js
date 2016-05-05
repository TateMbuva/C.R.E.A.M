//Dependencies
var express = require('express');
var router = express.Router();

//Middleware to use for all requests
router.use(function(req, res, next) {

    console.log('Route has been filtered through Middleware.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/langs', function(req, res){

  res.send('Javascript, Python, Ruby, Go');


});
//Return Router
module.exports = router;
