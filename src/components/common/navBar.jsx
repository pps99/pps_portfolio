import React from "react";
import { Link } from "react-router-dom";
import "./styles/navBar.css";

const NavBar = ({ active }) => {
	return (
		<div className="nav-container">
			<nav className="navbar">
				<div className="nav-background">
					<ul className="nav-list">
						<li className={`nav-item ${active === "home" ? "active" : ""}`}>
							<Link to="/">Home</Link>
						</li>
						<li className={`nav-item ${active === "about" ? "active" : ""}`}>
							<Link to="/about">About</Link>
						</li>
						<li className={`nav-item ${active === "projects" ? "active" : ""}`}>
							<Link to="/projects">Projects</Link>
						</li>
						<li className={`nav-item ${active === "contact" ? "active" : ""}`}>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
