
	
function readFiles(){
	const express = require('fs');
	var files = fs.readdirSync('/assets/photos/');
	console.log(files);
}

export { readFiles };