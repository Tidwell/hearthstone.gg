var express = require('express')

module.exports = {
	init: function() {
		var app = express()

		app.get('/', function(req, res) {
			res.send('Hearthstone.gg')
		})

		var server = app.listen(9011, function() {

			var host = server.address().address;
			var port = server.address().port;

			console.log('Serving at http://%s:%s', host, port)

		})

	}
};