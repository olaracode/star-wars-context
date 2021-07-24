import React from "react";
import Planet from "./../../img/planet1.jpg";
import PropTypes from "prop-types";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { useHistory, Link } from "react-router-dom";

export const SpecificPerson = props => {
	return (
		<div className="card m-auto w-50">
			<div className="card-header d-flex justify-content-between">
				<Link className="btn btn-outlined-primary" to="/characters">
					<ArrowBackIosIcon />
				</Link>
				<h2>Personaje</h2>
			</div>

			<img src={Planet} alt="..." className="card-img-top" />
			<div className="card-body">
				<h5 className="card-title">{props.item.properties.name}</h5>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Año de Nacimiento: {currentItem.properties.birth_year}</li>
					<li className="list-group-item">Genero: {currentItem.properties.gender}</li>
					<li className="list-group-item">Color de Ojos: {currentItem.properties.eye_color}</li>
					<li className="list-group-item">Color de Cabello: {currentItem.properties.hair_color}</li>
					<li className="list-group-item">Altura: {currentItem.properties.height}</li>
					<li className="list-group-item">Peso: {currentItem.properties.mass}</li>
					<li className="list-group-item">Color de Piel: {currentItem.properties.skin_color}</li>
				</ul>
			</div>
		</div>
	);
};
SpecificPerson.propTypes = {
	item: PropTypes.object
};
