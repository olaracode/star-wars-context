import React from "react";
import { useHistory, Link } from "react-router-dom";
import PropTypes from "prop-types";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Planet from "./../../img/planet1.jpg";
import Planet2 from "./../../img/planet2.jpg";
import Planet3 from "./../../img/endor.jpg";

export const SpecificPlanet = props => {
	const planets = [Planet, Planet2, Planet3];
	const randomPlanet = Math.floor(Math.random() * planets.length);
	const random = planets[randomPlanet];
	return (
		<div className="card m-auto w-50">
			<div className="card-header d-flex justify-content-between">
				<Link className="btn btn-outlined-primary" to="/planets">
					<ArrowBackIosIcon />
				</Link>
				<h2>Planeta</h2>
			</div>
			<img src={random} alt="..." className="card-img-top" />
			<div className="card-body">
				<h5 className="card-title">{props.item.properties.name}</h5>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Poblacion: {props.item.properties.population}</li>
					<li className="list-group-item">Diametro: {props.item.properties.diameter}</li>
					<li className="list-group-item">Terreno: {props.item.properties.terrain}</li>
					<li className="list-group-item">Clima: {props.item.properties.climate}</li>
					<li className="list-group-item">Superficie de agua: {props.item.properties.surface_water}</li>
					<li className="list-group-item">Gravedad: {props.item.properties.gravity}</li>
					<li className="list-group-item">Periodo de Orbita: {props.item.properties.orbital_period}</li>
					<li className="list-group-item">Periodo de Rotacion: {props.item.properties.rotation_period}</li>
				</ul>
			</div>
		</div>
	);
};
SpecificPlanet.propTypes = {
	item: PropTypes.object
};
