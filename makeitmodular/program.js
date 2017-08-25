/*
// process.argv(node, path, arg1, arg2...);
var total = 0;
for(i = 2; i < process.argv.length; i++){
  total += Number(process.argv[i]);
}
console.log(total);
*/

/*
// function to read number of lines in a file
var fs = require('fs');
var buff = fs.readFileSync(process.argv[2]).toString();
var num_lines = buff.split('\n').length - 1;
console.log(num_lines);
*/

/*
// function to asynchronously read number of lines in file
var fs = require('fs');
fs.readFile(process.argv[2], 'utf-8', function callback(err, data) {
	if(err) throw err;
	console.log(data.toString().split('\n').length - 1);
})
*/

/*
// function to read directory and print out all files
// given extension name
var fs = require('fs');
fs.readdir(process.argv[2], function callback(err, list){
	if(err) throw err;
	var path = require('path');
	var str = "." + process.argv[3].toString();
	for(i = 0; i < list.length; i++){
		if(str == path.extname(list[i]))
			console.log(list[i]);
	}
})
*/

var my_module = require('./mymodule');

var callback = function (err, list){
	if(err) console.log("Ha. Nope.");
	for(i = 0; i< list.length; i++) console.log(list[i]);
};

my_module(process.argv[2], process.argv[3], callback);
