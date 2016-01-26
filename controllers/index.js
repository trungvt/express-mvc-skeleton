var Foo = require('../models/foo'); // Load the model 

exports.registerRoutes = function(app) {
	app.get('/', function(req, res) {
		var foo = new Foo('Nodie'); // create a new Foo object
		res.render('index', { title : 'Express-MVC', content : foo.say() });
	});
}