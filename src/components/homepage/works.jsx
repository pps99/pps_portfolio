import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./m-solid.svg"
								alt="METATEAM MYANMAR"
								className="work-image"
							/>
							<div className="work-info">
								<div className="work-title">
									<a href="https://metateammyanmar.com/" target="_blank" rel="noreferrer">
										METATEAM MYANMAR
									</a>
								</div>
								<div className="work-subtitle">Web Developer</div>
								<div className="work-duration">2022 - 2024</div>
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
