import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import { Card } from "./Card.jsx";
export const Characters = () => {
	const { store, actions } = useContext(Context);
	const [search, setSearch] = useState("");
	const filteredCharacters = store.characters.filter(character => {
		//Evita el case sensitive
		let lowerCasedName = character.name.toLowerCase();
		if (lowerCasedName.includes(search)) {
			return character;
		}
	});
	return (
		<div className="container-fluid" style={{ marginBottom: 100 }}>
			<div className="d-flex justify-content-between">
				<div>
					<p className="m-3 text-end">Total: {store.characters.length}</p>
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
			<div className="row m-auto">
				{filteredCharacters.map(character => {
					return <Card key={character.uid} item={character} isFavourite={false} />;
				})}
			</div>
		</div>
	);
};
