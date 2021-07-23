import React, { useEffect, useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import { Context } from "../store/appContext";
import Planet from "./../../img/planet1.jpg";
import Planet2 from "./../../img/planet2.jpg";
import Planet3 from "./../../img/endor.jpg";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export const Specific = props => {
	const history = useHistory();
	const [currentItem, setCurrentItem] = useState({});
	const [loading, setLoading] = useState(true);
	const { store, actions } = useContext(Context);
	const planets = [Planet, Planet2, Planet3];
	const randomPlanet = Math.floor(Math.random() * planets.length);
	const random = planets[randomPlanet];
	useEffect(() => {
		try {
			let getItem = async () => {
				await axios.get(store.linkToCurrent).then(response => {
					setCurrentItem(response.data.result);
					setLoading(false);
				});
			};
			getItem();
		} catch (err) {
			return err;
		}
	}, []);
	console.log(currentItem);
	return (
		<div>
			{loading ? (
				<div className="container m-auto d-flex align-items-center vh-100">
					<div className="m-auto text-center">
						<CircularProgress />
					</div>
				</div>
			) : (
				<>
					<div className="card m-auto w-50">
						{currentItem.description === "A planet." ? (
							<div className="card-header d-flex justify-content-between">
								<Link className="btn btn-outlined-primary" to="/planets">
									<ArrowBackIosIcon />
								</Link>
								<h2>Planeta</h2>
							</div>
						) : (
							<div className="card-header d-flex justify-content-between">
								<Link className="btn btn-outlined-primary" to="/characters">
									<ArrowBackIosIcon />
								</Link>
								<h2>Personaje</h2>
							</div>
						)}
						<img src={Planet} alt="..." className="card-img-top" />
						<div className="card-body">
							<h5 className="card-title">{currentItem.properties.name}</h5>
							{currentItem.description === "A planet." ? (
								<ul className="list-group list-group-flush">
									<li className="list-group-item">Poblacion: {currentItem.properties.population}</li>
									<li className="list-group-item">Diametro: {currentItem.properties.diameter}</li>
									<li className="list-group-item">Terreno: {currentItem.properties.terrain}</li>
									<li className="list-group-item">Clima: {currentItem.properties.climate}</li>
									<li className="list-group-item">
										Superficie de agua: {currentItem.properties.surface_water}
									</li>
									<li className="list-group-item">Gravedad: {currentItem.properties.gravity}</li>
									<li className="list-group-item">
										Periodo de Orbita: {currentItem.properties.orbital_period}
									</li>
									<li className="list-group-item">
										Periodo de Rotacion: {currentItem.properties.rotarion_period}
									</li>
								</ul>
							) : (
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										Año de Nacimiento: {currentItem.properties.birth_year}
									</li>
									<li className="list-group-item">Genero: {currentItem.properties.gender}</li>
									<li className="list-group-item">
										Color de Ojos: {currentItem.properties.eye_color}
									</li>
									<li className="list-group-item">
										Color de Cabello: {currentItem.properties.hair_color}
									</li>
									<li className="list-group-item">Altura: {currentItem.properties.height}</li>
									<li className="list-group-item">Peso: {currentItem.properties.mass}</li>
									<li className="list-group-item">
										Color de Piel: {currentItem.properties.skin_color}
									</li>
								</ul>
							)}
						</div>
					</div>
				</>
			)}
		</div>
	);
};
