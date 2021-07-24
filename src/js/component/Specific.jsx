import React, { useEffect, useState, useContext } from "react";

import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import { Context } from "../store/appContext";
import { SpecificPlanet } from "./SpecificPlanet.jsx";
import { SpecificPerson } from "./SpecificPerson.jsx";

export const Specific = props => {
	const [currentItem, setCurrentItem] = useState({});
	const [loading, setLoading] = useState(true);
	const { store, actions } = useContext(Context);

	useEffect(() => {
		try {
			let getItem = async () => {
				await axios.get(store.linkToCurrent).then(response => {
					setCurrentItem(response.data.result);
					setLoading(false);
				});
			};
			getItem();
		} catch (err) {
			return err;
		}
	}, []);
	return (
		<div style={{ marginBottom: 200 }}>
			{loading ? (
				<div className="container m-auto d-flex align-items-center vh-100">
					<div className="m-auto text-center">
						<CircularProgress />
					</div>
				</div>
			) : (
				<>
					{currentItem.description === "A planet." ? (
						<SpecificPlanet item={currentItem} />
					) : (
						<SpecificPerson item={currentItem} />
					)}
				</>
			)}
		</div>
	);
};
