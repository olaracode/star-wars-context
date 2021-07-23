import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Star } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import Placeholder from "./../../img/placeholder.png";
export const Characters = () => {
	let history = useHistory();
	const { store, actions } = useContext(Context);
	const handleClick = url => {
		actions.setCurrent(url);
		history.push("/details");
	};
	return (
		<div className="container-fluid">
			<p className="m-3 text-end">Total: {store.characters.length}</p>
			<div className="row m-auto">
				{store.characters.map(characters => {
					return (
						<div key={characters.uid} className="col-lg-2 col-sm-3 m-3 mx-auto">
							<div className="card m-auto">
								<img src={Placeholder} className="card-img-top" alt="..." />

								<div className="card-body">
									<h2>{characters.name}</h2>
									<div className="d-flex justify-content-between">
										<button
											onClick={() => handleClick(characters.url)}
											href="#"
											className="btn btn-primary">
											Aprende mas
										</button>
										<button
											href="#"
											className="btn btn-warning"
											onClick={() => actions.addFavourites(characters)}>
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
