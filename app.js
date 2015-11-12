var express = require('express')
var ghstatus = require ('./api')
var exphbs  = require('express-handlebars');
var moment = require('moment');
var Q = require('q');

var app = express();
var hbs = exphbs.create({
	helpers: {
		datify: function (dateStr) {
			return moment(new Date(dateStr)).format("DD/MM/YY HH:mm");
		}
	}
});

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/',function (req,res) {
	Q.all([ghstatus.status(),ghstatus.messages()]).done(
	 function(r) {
	 	res.render('home',{status:r[0],messages:r[1]});
	 });
	
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('GitHub Status app listening at http://%s:%s', host, port);
  });