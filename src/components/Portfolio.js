import React from "react";
import "../style/Portfolio.css";

function Portfolio() {
	return (
		<>
			<h2 className="portfolio">Portfolio</h2>
			<div className="projLink">
				<div className="projLink1">
					<a
						href="https://github.com/Jett65/project02WorkoutTracker"
						target="_blank"
						rel="noreferrer"
					>
						<img src="./image/project2.png" alt="Project 2"></img>
					</a>
					<a
						className="dep"
						href="https://bootcamp-workout-tracker.herokuapp.com/"
						target="_blank"
						rel="noreferrer"
					>
						Deposited App
					</a>
				</div>

				<div className="projLink2">
					<a
						href="https://github.com/Jett65/Wikimon"
						target="_blank"
						rel="noreferrer"
					>
						<img src="./image/project1.png" alt="Project 1"></img>
					</a>
					<a
						className="dep"
						href="https://jett65.github.io/Wikimon/"
						target="_blank"
						rel="noreferrer"
					>
						Deposited App
					</a>
				</div>

				<div className="projLink3">
					<a
						href="https://github.com/Jett65/E-com"
						target="_blank"
						rel="noreferrer"
					>
						<img src="./image/ecom.png" alt="E-comers app"></img>
					</a>
					<a
						className="dep"
						href="https://github.com/Jett65/E-com"
						target="_blank"
						rel="noreferrer"
					>
						Deposited App
					</a>
				</div>

				<div className="projLink4">
					<a
						href="https://github.com/Jett65/Daily_ToDo_List"
						target="_blank"
						rel="noreferrer"
					>
						<img src="./image/todoList.png" alt="Project 2"></img>
					</a>
					<a
						className="dep"
						href="https://jett65.github.io/Daily_ToDo_List/"
						target="_blank"
						rel="noreferrer"
					>
						Deposited App
					</a>
				</div>

				<div className="projLink5">
					<a
						href="https://github.com/Jett65/Whats_the_wether"
						target="_blank"
						rel="noreferrer"
					>
						<img src="./image/wether.png" alt="Project 2"></img>
					</a>
					<a
						className="dep"
						href="https://jett65.github.io/Whats_the_wether/"
						target="_blank"
						rel="noreferrer"
					>
						Deposited App
					</a>
				</div>

				<div className="projLink6">
					<a
						href="https://github.com/Jett65/onBrowsTextEditor"
						target="_blank"
						rel="noreferrer"
					>
						<img src="./image/textEdit.png" alt="Project 2"></img>
					</a>
					<a
						className="dep"
						href="https://on-browser-text-editor.herokuapp.com/"
						target="_blank"
						rel="noreferrer"
					>
						Deposited App
					</a>
				</div>
			</div>
		</>
	);
}

export default Portfolio;

// TODO: Style the Portfolio
// TODO: Get Links the the projects
