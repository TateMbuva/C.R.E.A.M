
//Dependencies
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

//BodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Port
var port = process.env.PORT || 3000;

app.get('/', function(req, res, next){
  res.send('Server is running, API access route - http://localhost:3000/api');
  next();

});

//Api Endpoints Access
app.use('/api', require('./api'));
//Run Server
app.listen(port);
console.log("C.R.E.A.M API running at port : http://localhost:" + port);
