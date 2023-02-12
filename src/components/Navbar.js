import React from "react";
import "../style/Navbar.css";

function Navbar({ currentPage, handlePageChange }) {
	return (
		<nav className="navbar">
			<label className="logo">Jett Crowther</label>
			<ul className="navLinks">
				<li>
					<a
						href="#aboutMe"
						onClick={() => handlePageChange("AboutMe")}
						className={currentPage === "AboutMe"}
					>
						About Me
					</a>
				</li>
				<li>
					<a
						href="#portfolio"
						onClick={() => handlePageChange("Portfolio")}
						className={currentPage === "Portfolio"}
					>
						Portfolio
					</a>
				</li>
				<li>
					<a
						href="#contact"
						onClick={() => handlePageChange("Contact")}
						className={currentPage === "Contact"}
					>
						Contact
					</a>
				</li>
				<li>
					<a
						href="#resume"
						onClick={() => handlePageChange("Resume")}
						className={currentPage === "Resume"}
					>
						Resume
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;

// TODO: Make the nave reduce to a pop out menu when screen is a seitan size
