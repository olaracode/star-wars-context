import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Star } from "@material-ui/icons";
import { Context } from "../store/appContext";

import DeathStar from "./../../img/deathstar.png";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<div>
				<Link to="/">
					<img src={DeathStar} className="specialIcon" />
					<span className="navbar-brand  p-2 mb-0 h1 text-white">StarWars</span>
				</Link>
			</div>
			<div className="d-flex justify-content-between">
				<div className="p-2">
					<Link to="/planets" className="btn btn-outline-primary">
						Planetas
					</Link>
				</div>
				<div className="p-2">
					<Link to="/characters" className="btn btn-outline-primary">
						Personajes
					</Link>
				</div>
				<div className="p-2">
					<Link className="btn btn-outline-warning d-flex" to="/favourites">
						<Star />
					</Link>
				</div>
			</div>
		</nav>
	);
};
