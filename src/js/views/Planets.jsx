import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import { Card } from "./Card.jsx";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	const [search, setSearch] = useState("");
	const filteredPlanets = store.planets.filter(planet => {
		//Evita el case sensitive
		let lowerCasedName = planet.name.toLowerCase();
		if (lowerCasedName.includes(search)) {
			return planet;
		}
	});
	return (
		<div className="container-fluid" style={{ marginBottom: 100 }}>
			<div className="d-flex justify-content-between">
				<div>
					<p className="m-3 text-end">Total: {store.planets.length}</p>
				</div>
				<div className="w-25">
					<input
						type="text"
						name=""
						id=""
						className="form-control"
						onChange={e => setSearch(e.target.value)}
						placeholder="Buscar"
					/>
				</div>
			</div>
			<div className="row m-auto mb-5">
				{filteredPlanets.map(planet => {
					return <Card key={planet.uid} item={planet} isFavourite={false} />;
				})}
			</div>
		</div>
	);
};
