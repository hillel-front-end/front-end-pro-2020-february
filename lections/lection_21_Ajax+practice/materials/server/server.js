var express = require('express');
var fs = require('fs');
var app = express(); 
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

const port = 3005;
 
app.listen(port, function () { // говорим на каком порту запускать нашу  NODE_JS  программу.
    console.log(`Example app listening on port http://localhost:${port}/`);
});


app.get('/', function(req, res) {
	const value = Math.round(Math.random() * 50);
	const status = value > 25? 200 : 404;

	res
	.status(status)
	.send({a: 'ok'});
});


app.post('/', function(req, res) {
	let status = 200;
	const {login = 'unnamed', lastName} = req.body;
	let message;

	if (login == 'admin') {
		status = 200;
		message = 'welcome';
	} else {
		status = 404;
		message = 'Login is not defined';
	}

	res
	.status(status)
	.send({message: message});
});