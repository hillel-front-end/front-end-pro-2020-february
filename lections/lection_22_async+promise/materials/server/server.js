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


app.get('/foo', function(req, res) {
	setTimeout(() => {
		res
		  .status(200)
		  .send('123');
	  }, 1000)
});


app.get('/briz', function(req, res) {
	setTimeout(() => {
	  res
		.status(200)
		.send('123');
	}, 3000)
});

function getId() {
	return {id: 'ac12112f12f12'};
}


app.get('/auth', function(req, res) {
	res
	.status(200)
	.send(getId());
});

function getUsers() {
	return [
		{name: 'Valera'}, 
		{name: 'Valera'}, 
		{name: 'Valera'}
	]
}

app.get('/getUsersById', function(req, res) {
	console.log(req.query, 'query');

	res
	.status(200)
	.send(getUsers());
});