import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Star } from "@material-ui/icons";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Placeholder from "./../../img/placeholder.png";

export const Favourites = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row">
			{store.favourites.length > 0 ? (
				store.favourites.map(favourite => {
					return (
						<div key={favourite.uid} className="col-md-4 col-sm-1 m-3 mx-auto">
							<div className="card m-auto">
								<img src={Placeholder} className="card-img-top" alt="..." />

								<div className="card-body">
									<h2>{favourite.name}</h2>
									<div className="d-flex justify-content-between">
										<button
											onClick={() => handleClick(favourite.url)}
											href="#"
											className="btn btn-primary">
											Aprende mas
										</button>
										<button
											href="#"
											className="btn btn-danger"
											onClick={() => actions.removeFavourite(favourite.uid)}>
											<DeleteOutlineIcon style={{ color: "white" }} />
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				})
			) : (
				<div className="m-auto text-center">
					<h3>No hay ningun favorito agregado</h3>
				</div>
			)}
		</div>
	);
};
