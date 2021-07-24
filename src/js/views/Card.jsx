import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Star } from "@material-ui/icons";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { Context } from "../store/appContext";
import Placeholder from "./../../img/placeholder.png";

export const Card = props => {
	let history = useHistory();
	const { store, actions } = useContext(Context);

	const handleClick = url => {
		actions.setCurrent(url);
		history.push("/details");
	};
	const isFavourite = actions.isFavourite(props.item.name);

	return (
		<div key={props.item.uid} className="col-lg-2 col-sm-3 m-3 mx-auto">
			<div className="card m-auto">
				<img src={Placeholder} className="card-img-top" alt="..." />
				<div className="card-body">
					<h2>{props.item.name}</h2>
					<div className="d-flex justify-content-between">
						<button onClick={() => handleClick(props.item.url)} href="#" className="btn btn-primary">
							Aprende mas
						</button>
						{props.isFavourite ? (
							<button
								href="#"
								className="btn btn-danger"
								onClick={() => actions.removeFavourite(props.item.uid)}>
								<DeleteOutlineIcon style={{ color: "white" }} />
							</button>
						) : (
							<>
								{isFavourite ? (
									<button
										href="#"
										className="btn btn-warning"
										onClick={() => actions.addFavourites(props.item)}>
										<Star style={{ color: "yellow" }} />
									</button>
								) : (
									<button
										href="#"
										className="btn btn-warning"
										onClick={() => actions.addFavourites(props.item)}>
										<Star style={{ color: "white" }} />
									</button>
								)}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	item: PropTypes.object,
	isFavourite: PropTypes.bool
};
