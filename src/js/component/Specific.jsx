import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import axios from "axios";
export const Specific = () => {
	const [currentItem, setCurrentItem] = useState({});
	const { store, actions } = useContext(Context);
	useEffect(async () => {
		if (store.linkToCurrent === "") {
		}
		const getItem = await axios.get(store.linkToCurrent).then(response => console.log(response.data.result));
	}, []);
	return <div>This is a Specific</div>;
};
