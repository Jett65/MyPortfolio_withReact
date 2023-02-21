import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../style/Contact.css";

export const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"default_service",
				"template_xehrjlj",
				form.current,
				"6IjCtbSnPTqvVpIZV"
			)
			.then(
				(result) => {
					alert("Email Sent");
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<form ref={form} onSubmit={sendEmail}>
			<label>Name</label>
			<input type="text" id="name" name="user_name" />
			<label>Email</label>
			<input type="email" id="email" name="user_email" />
			<label>Message</label>
			<textarea id="message" name="message" />
			<button type="submit">Submit</button>
		</form>
	);
};

export default Contact;
