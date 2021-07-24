import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import { Card } from "./Card.jsx";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid" style={{ marginBottom: 100 }}>
			<p className="m-3 text-end">Total: {store.planets.length}</p>
			<div className="row m-auto mb-5">
				{store.planets.map(planet => {
					return <Card key={planet.uid} item={planet} />;
				})}
			</div>
		</div>
	);
};
