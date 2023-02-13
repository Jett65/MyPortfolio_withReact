import "./style/App.css";
import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
	const [currentPage, setCurrentPage] = useState("AboutMe");

	function renderPage() {
		if (currentPage === "AboutMe") {
			return <AboutMe />;
		}
		if (currentPage === "Portfolio") {
			return <Portfolio />;
		}
		if (currentPage === "Contact") {
			return <Contact />;
		}
		return <Resume />;
	}

	function handlePageChange(page) {
		setCurrentPage(page);
	}

	return (
		<>
			<Navbar
				currentPage={currentPage}
				handlePageChange={handlePageChange}
			/>
			{renderPage()}
		</>
	);
}

export default App;

// TODO: Add the a banner to the page
