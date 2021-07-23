import React, { Component } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

export const Footer = () => (
	<footer className="footer mt-auto fixed-bottom py-3 bg-dark text-center">
		<a href="" className="btn btn-outlined-primary">
			<GitHubIcon style={{ color: "white" }} />
		</a>
		<p className="text-white">Realizado por Octavio Lara. 4GeeksAcademyVzla</p>
	</footer>
);
