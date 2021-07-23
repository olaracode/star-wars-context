import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Star } from "@material-ui/icons";
export const Top = () => {
	const { store, actions } = useContext(Context);
	const characters = actions.getTopCharacters();
	const planets = actions.getTopPlanets();

	const top4 = array =>
		array.map(item => {
			return (
				<div key={item.uid} className="col-lg-3 col-sm-6">
					<div className="card">
						<img src="http://lorempixel.com/400/200" className="card-img-top" alt="..." />
						<div className="card-body">
							<h2>{item.name}</h2>
							<div className="d-flex justify-content-between">
								<a href="#" className="btn btn-primary">
									Aprende mas
								</a>
								<a href="#" className="btn btn-warning">
									<Star style={{ color: "white" }} />
								</a>
							</div>
						</div>
					</div>
				</div>
			);
		});
	console.log(characters);
	return (
		<>
			<div className="container-fluid">
				<div className="p-3">
					<h2 className="text-center">Personajes Favoritos</h2>
					<div className="row">{top4(characters)}</div>
				</div>
				<div className="p-3">
					<h2 className="text-center">Planetas Favoritos</h2>
					<div className="row">{top4(planets)}</div>
				</div>
			</div>
		</>
	);
};
