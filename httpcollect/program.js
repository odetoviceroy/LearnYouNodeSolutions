/*
	Write a program that performs an HTTP GET request to
	u URL provided to you as the first cmd-line arg...
	Print 2 Lines:
		First will have an integer for number of chars received from the server
		Second will have complete string of characters send by the server
*/

var http = require('http');
var bl = require('bl');

var bl_funct = bl(function(err, data){
	var buffer = data.toString();
	console.log(buffer.length + "\n" + buffer);
});

var callback = function(response){
	response.setEncoding('utf8');
	response.pipe(bl_funct);
};

var req = http.get(process.argv[2], callback);
req.on('error', function(e){
	console.log('Error: ' + e.message);
});
