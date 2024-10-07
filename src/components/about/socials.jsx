import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faAddressBook,faPhone } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials">
			{/* <div className="social">
				<a href={INFO.socials.twitter} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faTwitter}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on Twitter</div>
				</a>
			</div> */}

			<div className="social">
				<a href={INFO.socials.github} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on GitHub</div>
				</a>
			</div>

			<div className="social">
				<a
					href={INFO.socials.linkedin}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faLinkedin}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on LinkedIn</div>
				</a>
			</div>

			<div className="social">
				<a
					href={`mailto:${INFO.main.email}`}
					target="_blank"
					rel="noreferrer"
				>
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>

						<div className="social-text">{INFO.main.email}</div>
				</a>
			</div>
			<div className="social">
				<a>
					<div className="social-icon">
						<FontAwesomeIcon icon={faPhone} />
					</div>

					<div className="social-text">{INFO.main.phone}</div>
				</a>
			</div>
			<div className="social">
				<a>
					<div className="social-icon">
						<FontAwesomeIcon icon={faAddressBook} />
					</div>

					<div className="social-text">{INFO.main.address}</div>
				</a>
			</div>
		</div>
	);
};

export default Socials;
