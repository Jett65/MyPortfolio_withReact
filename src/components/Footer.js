import React from "react";
import "../style/Footer.css";

function Footer() {
	const style = {};
	return (
		<>
			<div className="footer">
				<a className="link" href="https://github.com/Jett65">
					GitHub
				</a>
				<a className="link" href="https://www.linkedin.com/">
					Linkedin
				</a>
				<a className="link" href="https://stackoverflow.com/">
					Stack overflow
				</a>
			</div>
		</>
	);
}

export default Footer;
