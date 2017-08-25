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

var listFiles = function(dir_name, ext_name, callback){
	var fs = require('fs');
	var path = require('path');

	fs.readdir(dir_name, function(err, list){
		if(err) return callback(err);
		else{
			var file_names = [];
			var str = "." + ext_name.toString();
			for(i = 0; i < list.length; i++){
				if(str == path.extname(list[i]))
					//console.log(list[i]);
					file_names.push(list[i]);
			}
			
		}
		return callback(null, file_names);
	});
	
};

module.exports = listFiles;

