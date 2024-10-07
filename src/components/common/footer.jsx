import React from "react";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import INFO from "../../data/user";

import "./styles/footer.css";

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer">
                <div className="footer-links">
                    <div className="footer-socials">
                        <a
                            href={INFO.socials.linkedin}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="footer-social-icon"
                            />
                        </a>
                        <a
                            href={INFO.socials.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="footer-social-icon"
                            />
                        </a>
                        <a
                            href={`mailto:${INFO.main.email}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faMailBulk}
                                className="footer-social-icon"
                            />
                        </a>
                    </div>
                </div>

                <div className="footer-credits">
                    <div className="footer-credits-text">
                        © 2024 Pyae Phyo Shan. All Rights Reserved.
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Footer;
