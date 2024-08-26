// Importing the file system module to work with files.
const fs = require("fs");

// Create a file named "welcome.txt" and write "Hello Node" inside it.
fs.writeFile("welcome.txt", "Hello Node", function (err) {
	if (err) throw err;
	console.log("File created and data written!"); // file is created!

	// read the file we just created and print its content.
	fs.readFile("welcome.txt", "utf8", function (err, data) {
		if (err) throw err;
		console.log("Reading the file: " + data); // Here's what I wrote earlier.
	});
});
