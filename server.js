// Setting up a server.
const http = require("http");

// Creating the server and telling it what to do when someone visits our site.
http
	.createServer(function (request, response) {
		// Setting response header to say everything's okay and sending HTML.
		response.writeHead(200, { "Content-Type": "text/html" });

		// Sending the message to the browser.
		response.end("<h1>Hello Node!!!!</h1>\n");
	})
	.listen(3000); // server is listening on port 3000

// Letting the world know my server is up and running!
console.log("Server running at http://localhost:3000/");
