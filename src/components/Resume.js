import React from "react";
import "../style/Resume.css";

function Resume() {
	return (
		<>
			<h2 className="resume">Resume</h2>
			<div className="content">
				<a
					className="resumeLink"
					href="./image/Resume.pdf"
					download
					target="_blank"
					rel="noreferrer"
				>
					Download my resume
				</a>
				<h2 className="title">Skills</h2>
				<ul className="skills">
					<li>JavaScript</li>
					<li>Python</li>
					<li>Html</li>
					<li>CSS</li>
					<li>React</li>
					<li>Express</li>
					<li>Sql</li>
					<li>Sequelize</li>
					<li>mongoDB</li>
					<li>mongoose</li>
				</ul>
			</div>
		</>
	);
}

export default Resume;

// TODO: Make the mobil not have black bullets
