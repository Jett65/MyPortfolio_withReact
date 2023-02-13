import React from "react";
import MenuItems from "./MenuItems";
import Button from "./Button";
import "./style/Navbar.css";

function Navbar({ currentPage, handlePageChange }) {
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
				<Button />
			</nav>
			<div className="navMenu">
				<nav className="navMenu">
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
