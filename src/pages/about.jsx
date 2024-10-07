import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									Web Developer
								</div>

								<div className="subtitle about-subtitle">
									With over two years of experience in web development, I focus on building and maintaining high-quality software solutions for business applications. I have proficiency in both front-end and back-end technologies, including Ruby on Rails, Express.js, Node.js, Spring Boot, and Flask. Additionally, I possess strong database management skills, working with MySQL, MongoDB, and Snowflake, ensuring efficient and secure data handling. Passionate about staying current with emerging technologies, I continuously work to improve my technical skills and problem-solving abilities.
								</div>

								<div className="education">
									<h2>Education</h2>
									<p><strong>Bachelor of Engineering (Hons) in Computer Science and Engineering</strong></p>
									<p>Myanmar Institute of Information Technology (MIIT)</p>
									<p>CGPA: 3.45</p>
									<p>Relevant Coursework: Data Structures and Algorithms, Web Development, Database Systems, Software Engineering</p>
								</div>

								<div className="experience">
									<h2>Work Experience</h2>
									<h3>Junior Web Developer | MetaTeam Myanmar Co. Ltd</h3>
									<p>April 2022 – April 2024</p>
									<p><strong>Key Responsibilities:</strong></p>
									<ul>
										<li>Developed and maintained codebases with comprehensive testing to ensure system reliability and performance.</li>
										<li>Collaborated on resolving complex data-related issues and optimized functionalities across web applications.</li>
										<li>Worked closely with teams to identify and troubleshoot bugs, improving overall code quality.</li>
									</ul>

									<h4>Key Achievements:</h4>
									<ul>
										<li>Efficiently used Git for version control and team collaboration.</li>
										<li>Played a key role in identifying performance bottlenecks and optimizing code to ensure high application performance.</li>
									</ul>
								</div>

								<div className="capstone">
									<h2>Capstone Project</h2>
									<h3>Online Cake Ordering Web Platform</h3>
									<p><strong>Tech Stack:</strong> Next.js (Frontend), Ruby on Rails (Backend)</p>
									<ul>
										<li>Built a full-featured online platform for cake orders with user and admin authentication systems.</li>
										<li>Developed real-time updates and notifications using WebSocket for admin functionalities.</li>
										<li>Handled order management, balance approvals, and sales reporting via an efficient admin panel.</li>
									</ul>
								</div>

								<div className="technologies">
									<h2>Technologies</h2>
									<ul>
										<li><strong>Front-end:</strong> HTML, CSS, JavaScript, React, NextJs</li>
										<li><strong>Back-end:</strong> Ruby on Rails, Node.js, Laravel, Spring Boot</li>
										<li><strong>Databases:</strong> MySQL, MongoDB, Snowflake, PostgreSQL</li>
										<li><strong>Tools:</strong> Git, Postman, Visual Studio Code</li>
									</ul>
								</div>

								<div className="skills">
									<h2>Skills</h2>
									<ul>
										<li>Proficiency in Web Development: Ruby, Node.js, Java, Python</li>
										<li>Database Management and Optimization</li>
										<li>RESTful API Development and Integration</li>
										<li>Version Control: Git, Sourcetree</li>
									</ul>
								</div>

								<div className="english-proficiency">
									<h2>English Proficiency</h2>
									<ul>
										<li>Studied in an English-speaking academic environment with Indian professors for five years.</li>
										<li>Completed a four-month internship at MetaTeam Myanmar Co., Ltd., a Myanmar-based Japanese company.</li>
										<li>Fluent in both written and spoken English.</li>
									</ul>
								</div>

								<div className="additional-information">
									<h2>Additional Information</h2>
									<ul>
										<li>Committed to continuous learning and self-improvement.</li>
										<li>Experience working collaboratively across multiple teams and departments.</li>
										<li>First-place winner in university football competition, demonstrating strong competitive and team skills.</li>
									</ul>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="my-photo.jpeg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
