import React from "react";
import "../style/Resume.css";

function Resume() {
	return (
		<>
			<h2 className="resume">Resume</h2>
			<div className="content">
				<h2 className="title">Languages</h2>
				<ul className="knownLang">
					<li>JavaScript</li>
					<li>Python</li>
					<li>Html</li>
					<li>CSS</li>
					<li>Sql</li>
					<li>mongoDB</li>
				</ul>
				<h2 className="title">Other Skills</h2>
				<ul className="other">
					<li>React</li>
					<li>Express</li>
					<li>Sequelize</li>
					<li>mongoose</li>
				</ul>

				<a
					className="resumeLink"
					href="./image/Resume.pdf"
					download
					target="_blank"
					rel="noreferrer"
				>
					Download my resume
				</a>
			</div>
		</>
	);
}

export default Resume;

// TODO: Make the mobil not have black bullets
