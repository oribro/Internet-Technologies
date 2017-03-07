
var hujiwebserver = require('./hujiwebserver.js');
var fs = require('fs')
var gambling = {"ones":0,"zeros":0};

hujiwebserver.start(8081, function (err) {
    });


hujiwebserver.use('/www/binary.html', function (req, res, next) {
		var fileName = "." + req.path;
		const types = {
		    '.js': 'application/javascript',
		    '.html': 'text/html',
		    '.css': 'text/css'
    	};
		fs.readFile(fileName, 'utf-8', function (err, data) {
		    if (!err) {
		    	var elem = fileName.split('.').pop();
		    	if (types[elem] ) {
		    		res.set('Content-Type', types[elem]);
		    	}
		    	res.send(data);
		    }
		    else {
		       res.send(err.message);
		    }
		});
	});

hujiwebserver.use("/gamble/0", function (req, res, next) {
	gambling["zeros"]++;
	res.send(gambling);
});

hujiwebserver.use("/gamble/1", function (req, res, next) {
	gambling["ones"]++;
	res.send(gambling);
});

hujiwebserver.use("/gamble/reset", function (req, res, next) {
	gambling["zeros"] = 0;
	gambling["ones"] = 0;
	res.send(gambling);
});
