var express = require('express');
var app = express();

app.get('/test', function (req, res) {
	res.json({
		message: 'wato'
	});
});

app.listen(3000, function () {
	console.log('WATO\'s backend is listening on port 3000');
});