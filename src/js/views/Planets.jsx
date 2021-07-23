import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Star } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import Placeholder from "./../../img/placeholder.png";
export const Planets = () => {
	let history = useHistory();
	const { store, actions } = useContext(Context);
	const handleClick = url => {
		actions.setCurrent(url);
		history.push("/details");
	};

	return (
		<div className="container-fluid">
			<p className="m-3 text-end">Total: {store.planets.length}</p>
			<div className="row m-auto">
				{store.planets.map(planet => {
					return (
						<div key={planet.uid} className="col-lg-2 col-sm-3 m-3 mx-auto">
							<div className="card m-auto">
								<img src={Placeholder} className="card-img-top" alt="..." />

								<div className="card-body">
									<h2>{planet.name}</h2>
									<div className="d-flex justify-content-between">
										<button
											onClick={() => handleClick(planet.url)}
											href="#"
											className="btn btn-primary">
											Aprende mas
										</button>
										<button
											href="#"
											className="btn btn-warning"
											onClick={() => actions.addFavourites(planet)}>
											<Star style={{ color: "white" }} />
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
