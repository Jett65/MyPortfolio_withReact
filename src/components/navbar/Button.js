import React from "react";
import "./style/Button.css";

function Button() {
	function displayMenu() {
		console.log("Clicked");
	}

	return (
		<button className="openMenu" onClick={displayMenu}>
			<div className="line">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</button>
	);
}

export default Button;
