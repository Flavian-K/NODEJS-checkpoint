// Importing the nodemailer module to send emails.
const nodemailer = require("nodemailer");

// Creating a transporter using my email service.
let transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "your.email@gmail.com", // Change this to your email.
		pass: "yourpassword", // NEVER upload password to GitHub!
	},
});

// Setting up the email details.
let mailOptions = {
	from: "your.email@gmail.com", // Same here.
	to: "your.email@gmail.com", // Sending an email to yourself.
	subject: "Sending Email using Node.js",
	text: "That was easy!",
};

// Sending the email.
transporter.sendMail(mailOptions, function (error, info) {
	if (error) {
		console.log(error); // if, something went wrong!
	} else {
		console.log("Email sent: " + info.response); // Email sent!
	}
});
