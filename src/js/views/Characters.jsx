import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import { Card } from "./Card.jsx";
export const Characters = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid" style={{ marginBottom: 100 }}>
			<p className="m-3 text-end">Total: {store.characters.length}</p>
			<div className="row m-auto">
				{store.characters.map(character => {
					return <Card key={character.uid} item={character} />;
				})}
			</div>
		</div>
	);
};
