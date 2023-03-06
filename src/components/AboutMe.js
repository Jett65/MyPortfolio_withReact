import React from "react";
import "../style/AboutMe.css";

function AboutMe() {
	return (
		<>
			<div className="aboutMe">
				<h2>About Me</h2>
				<img
					className="avatar"
					src="./image/Me.JPG"
					alt="Temp banner"
				/>
				<p>
					Hello, my name is Jett Crowther I am here to make your dream
					webpage a reality. I am skilled in a vast area of
					programming languages and frameworks. My goal is to learn
					all that one possible can, and become the best developer who
					has ever graced the internet.
				</p>
			</div>
		</>
	);
}

export default AboutMe;
