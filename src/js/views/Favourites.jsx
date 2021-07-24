import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./Card.jsx";
export const Favourites = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row p-5">
			{store.favourites.length > 0 ? (
				store.favourites.map(favourite => {
					return <Card key={favourite.uid} item={favourite} isFavourite={true} />;
				})
			) : (
				<div className="m-auto text-center">
					<h3>No hay ningun favorito agregado</h3>
				</div>
			)}
		</div>
	);
};
