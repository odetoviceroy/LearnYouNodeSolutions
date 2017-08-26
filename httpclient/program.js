/*
	Create a program that would take in a url as the second
	argument on the command line, and send an HTTP request
	to print out the data chunks as they come along
*/

var http = require('http');
var list = [];

var callback = function(response){
	/* response object is a Node Stream object, can be treated
	as objects that emit events...focus on "data", "error",
	and "end"
	*/
	response.setEncoding('utf8');
	response.on('data', function(data){
		list.push(data);
	}).on('end', function() {
		for(i = 0; i < list.length; i++)
			console.log(list[i]);
	});
};


var req = http.get(process.argv[2], callback);

req.on('error', function(e){
	console.log('Error: ' + e.message);
});
