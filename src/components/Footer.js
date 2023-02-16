import React from "react";
import "../style/Footer.css";

function Footer() {
	const style = {};
	return (
		<>
			<div className="footer">
				<a
					className="link"
					href="https://github.com/Jett65"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
				<a
					className="link"
					href="https://www.linkedin.com/"
					target="_blank"
					rel="noreferrer"
				>
					Linkedin
				</a>
				<a
					className="link"
					href="https://stackoverflow.com/"
					target="_blank"
					rel="noreferrer"
				>
					Stack overflow
				</a>
			</div>
		</>
	);
}

export default Footer;
