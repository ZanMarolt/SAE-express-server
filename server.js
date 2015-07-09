// Adding express library
var express = require('express');
var app = express();

var server;

var products = [
	{
		name:"product 1",
		price:10,
		stock:14
	},
	{
		name:"product 2",
		price:19,
		stock:3
	},
	{
		name:"product 3",
		price:123,
		stock:5
	},
	{
		name:"product 3",
		price:26,
		stock:5
	}

];

/*

module.exports = {

	startServer:function(){

		var server = app.listen(3000, function(){

			console.log('server started');

		});

	}
}



//You can also do like this

exports.startServer = function(){

	var server = app.listen(3000, function(){

		console.log('server started');

	});

}

*/

// or you can also

function startServer(cb){

	server = app.listen(3000, function(){

		console.log('Server started');
		cb();

	});

}

function startRouter(){

	//app.get('/', express.static('public'));


	//app.get('/products', express.static('public'));

	app.get('/products', function(req, res){

		res.send(products);

	});

	// expose whole folder tree to the internet
	app.use('/', express.static('public'));

}


module.exports = {

	startServer: startServer,
	startRouter: startRouter

};

