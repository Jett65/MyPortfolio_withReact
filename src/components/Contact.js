import React from "react";
import "../style/Contact.css";

function Contact() {
	return <>This is the Contact page</>;
}

export default Contact;

// import React, { useForm } from "react";
// function Contact() {
// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors },
// 		reset,
// 	} = useForm();

// 	const onSubmit = (toSend) => {
// 		send("service_id", "template_id", toSend, "user_id")
// 			.then((response) => {
// 				console.log("SUCCESS!", response.status, response.text);
// 			})
// 			.catch((err) => {
// 				console.log("FAILED...", err);
// 			});
// 		reset();
// 	};

// 	return (
// 		<form onSubmit={handleSubmit(onSubmit)}>
// 			<input
// 				type="text"
// 				placeholder="Name"
// 				name="from_name"
// 				id="name"
// 				{...register("from_name", { required: "Name is required" })}
// 			/>
// 			{errors.from_name && (
// 				<span className="danger_text">{errors.from_name.message}</span>
// 			)}
// 			<input
// 				type="text"
// 				placeholder="Email"
// 				name="reply_to"
// 				id="email"
// 				{...register("reply_to", {
// 					required: "Email is Required",
// 					pattern: {
// 						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
// 						message: "Invalid email address",
// 					},
// 				})}
// 			/>
// 			{errors.reply_to && (
// 				<small className="danger_text">{errors.reply_to.message}</small>
// 			)}
// 			<input
// 				type="text"
// 				placeholder="Subject"
// 				id="subj"
// 				name="subject"
// 				{...register("subject")}
// 			/>
// 			<input
// 				type="text"
// 				placeholder="Message"
// 				id="msg"
// 				name="message"
// 				{...register("message", { required: true })}
// 			/>
// 			{errors.message && (
// 				<small className="danger_text">Enter your message</small>
// 			)}
// 			<input
// 				type="submit"
// 				className="btn_red"
// 				value="Send a message"
// 			></input>
// 		</form>
// 	);
// }

// export default Contact;
