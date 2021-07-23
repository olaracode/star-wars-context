import React from "react";
import { useHistory } from "react-router-dom";
export const PathCard = () => {
	let history = useHistory();
	const toPlanets = () => {
		history.push("/planets");
	};
	const toCharacters = () => {
		history.push("/characters");
	};
	return (
		<div className="d-flex h-100">
			<div className="card w-50 m-5 planets" id="planets" onClick={() => toPlanets()}>
				<div className="card-body cartaInicio d-flex align-items-center">
					<h2 className="m-auto">Explora los Planetas</h2>
				</div>
			</div>
			<div className="card w-50 h-75 m-5" onClick={() => toCharacters()}>
				<div className="card-body cartaInicio d-flex align-items-center">
					<h2 className="m-auto">Explora los Personajes</h2>
				</div>
			</div>
		</div>
	);
};
