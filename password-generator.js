// Import password generator module I just installed.
const generator = require("generate-password");

// create a function that generates a random password.
function generatePassword() {
	// This will create a password with 10 characters.
	const password = generator.generate({
		length: 10,
		numbers: true, // Including numbers to make it stronger!
	});

	console.log("Your new password is: " + password); // Boom! Here's your password.
}

// Calling the function to see our password.
generatePassword();
