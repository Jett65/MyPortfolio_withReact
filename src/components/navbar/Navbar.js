import React, { useState } from "react";
import MenuItems from "./MenuItems";
import "./style/Navbar.css";

function Navbar({ currentPage, handlePageChange, highlightNav }) {
	const [menuStyle, setMenuStyle] = useState("navMenu");
	const [navStyle, setNavStyle] = useState("menuLink");
	const [highlight, setHighlight] = useState("#aboutMe");

	function displayMenu() {
		if (menuStyle === "navMenu") {
			setMenuStyle("navMenu2");
			setNavStyle("menuLink2");
		} else {
			setMenuStyle("navMenu");
			setNavStyle("menuLink");
		}
	}

	function highlightNav(element) {
		setHighlight(element);
	}

	const style = {
		backgroundColor: "#022a69",
		border: "solid rgb(182, 171, 171)",
	};

	return (
		<>
			<nav className="navbar">
				<h1 className="logo">Jett Crowther</h1>
				{/* <ul className="navTop">
					{MenuItems.map((item, index) => {
						return (
							<li key={index} className="navItem">
								<a
									href={item.hRef}
									onClick={() => {
										handlePageChange(`${item.claName}`);
									}}
									className={
										currentPage === `${item.claName}`
									}
									style={{
										backgroundColor: highlight
											? "#022a69"
											: "",
										border: highlight
											? "solid rgb(182, 171, 171)"
											: "",
									}}
								>
									{item.displayName}
								</a>
							</li>
						);
					})}
				</ul> */}
				<ul className="navTop">
					<li className="navItem">
						<a
							href={"#aboutMe"}
							onClick={() => {
								handlePageChange("AboutMe");
								highlightNav("#aboutMe");
							}}
							className={"AboutMe"}
							style={{
								backgroundColor:
									highlight === "#aboutMe" ? "#022a69" : "",
								border:
									highlight === "#aboutMe"
										? "solid #B6ABAB"
										: "",
							}}
						>
							About Me
						</a>
						<a
							href={"#portfolio"}
							onClick={() => {
								handlePageChange("Portfolio");
								highlightNav("#portfolio");
							}}
							className={"Portfolio"}
							style={{
								backgroundColor:
									highlight === "#portfolio" ? "#022a69" : "",
								border:
									highlight === "#portfolio"
										? "solid #B6ABAB"
										: "",
							}}
						>
							Portfolio
						</a>
						<a
							href={"#contact"}
							onClick={() => {
								handlePageChange("Contact");
								highlightNav("#contact");
							}}
							className={"Contact"}
							style={{
								backgroundColor:
									highlight === "#contact" ? "#022a69" : "",
								border:
									highlight === "#contact"
										? "solid #B6ABAB"
										: "",
							}}
						>
							Contact
						</a>
						<a
							href={"#resume"}
							onClick={() => {
								handlePageChange("Resume");
								highlightNav("#resume");
							}}
							className={"Resume"}
							style={{
								backgroundColor:
									highlight === "#resume" ? "#022a69" : "",
								border:
									highlight === "#resume"
										? "solid #B6ABAB"
										: "",
							}}
						>
							Resume
						</a>
					</li>
				</ul>

				<button className="openMenu" onClick={displayMenu}>
					<div className="line">
						<div></div>
						<div></div>
						<div></div>
					</div>
				</button>
			</nav>
			<div className={menuStyle}>
				<nav className={navStyle}>
					<ul>
						{MenuItems.map((item, index) => {
							return (
								<li key={index} className="navItemMenu">
									<a
										href={item.hRef}
										onClick={() =>
											handlePageChange(`${item.claName}`)
										}
										className={
											currentPage === `${item.claName}`
										}
									>
										{item.displayName}
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</>
	);
}

export default Navbar;

// TODO: Make the button bring in and out the menu
