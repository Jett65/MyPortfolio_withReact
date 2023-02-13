import React, { useState } from "react";
import MenuItems from "./MenuItems";
import "./style/Navbar.css";

function Navbar({ currentPage, handlePageChange }) {
	const [menuStyle, setMenuStyle] = useState("navMenu");
	const [navStyle, setNavStyle] = useState("menuLink");

	function displayMenu() {
		if (menuStyle === "navMenu") {
			setMenuStyle("navMenu2");
			setNavStyle("menuLink2");
		} else {
			setMenuStyle("navMenu");
			setNavStyle("menuLink");
		}
	}

	return (
		<>
			<nav className="navbar">
				<h1 className="logo">Jett Crowther</h1>
				<ul className="navTop">
					{MenuItems.map((item, index) => {
						return (
							<li key={index} className="navItem">
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
