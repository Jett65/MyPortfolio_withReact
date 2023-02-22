import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../style/Contact.css";

export const Contact = () => {
	const refOne = useRef();

	function handelSelected(e) {
		const errorMessage = "This filed is required";
		if (!e.target.value.length) {
			e.target.value = errorMessage;
			e.target.style.color = "red";
		} else {
			if (e.target.value !== errorMessage) {
				document.getElementById("submitBtn").disabled = false;
			}
		}
	}

	function whenClicked(e) {
		// Changes the text in the input filed to black
		e.target.style.color = "black";
	}

	// const handleChange = (e) => {
	// 	if (e.target.name === 'email') {
	// 	  const isValid = validateEmail(e.target.value);
	// 	  if (!isValid) {
	// 		setErrorMessage('Your email is invalid.');
	// 	  } else {
	// 		setErrorMessage('');
	// 	  }
	// 	} else {
	// 	  if (!e.target.value.length) {
	// 		setErrorMessage(`A ${e.target.name} is required.`);
	// 	  } else {
	// 		setErrorMessage('');
	// 	  }
	// 	}
	// 	if (!errorMessage) {
	// 	  setFormState({ ...formState, [e.target.name]: e.target.value });
	// 	  console.log('Handle Form', formState);
	// 	}
	//   };

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
			<input
				type="text"
				id="name"
				name="user_name"
				onClick={whenClicked}
				onBlur={handelSelected}
				required
			/>
			<div id="nameErr"></div>
			<label>Email</label>
			<input
				type="email"
				id="email"
				name="user_email"
				onClick={whenClicked}
				onBlur={handelSelected}
				required
			/>
			<div id="emailErr"></div>
			<label>Message</label>
			<textarea
				id="message"
				name="message"
				onClick={whenClicked}
				onBlur={handelSelected}
				required
			/>
			<div id="messageErr"></div>
			<button id="submitBtn" disabled={true} type="submit">
				Submit
			</button>
		</form>
	);
};

export default Contact;
