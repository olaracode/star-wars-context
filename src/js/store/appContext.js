import React, { useState, useEffect } from "react";
import getState from "./flux.js";
import axios from "axios";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);
		// Funcion "recursiva" para hacer todas las llamadas subsecuentes del apiCall
		const loop = async (array, link, action) => {
			do {
				await axios.get(link).then(response => {
					console.log(array);
					link = response.data.next;
					array.push(...response.data.results);
				});
			} while (link !== null);
			action(array);
		};

		//GET PLANETAS
		useEffect(async () => {
			if (localStorage.getItem("planets")) {
				// Si ya esta en localStorage
				state.actions.loadPlanetsFromLocalStorage(); // Se asigna el estado con ella
			} else {
				let planets = []; // Lista vacia donde se almacenaran todas las iteraciones
				const fetchPlanets = await axios.get("https://www.swapi.tech/api/planets/").then(response => {
					planets.push(...response.data.results); // Se incluye los resultados en el array
					let next = response.data.next; // Primer link de proxima pagina
					loop(planets, next, state.actions.loadPlanets); // Empiezan las iteraciones
				});
			}
		}, []);
		// GET PERSONAS
		useEffect(async () => {
			// Se repiten los mismos pasos de get planetas
			if (localStorage.getItem("characters")) {
				state.actions.loadCharactersFromLocalStorage();
			} else {
				let people = [];
				const fetchCharacters = await axios.get("https://www.swapi.tech/api/people/").then(response => {
					people.push(...response.data.results);
					let nextPeople = response.data.next;
					loop(people, nextPeople, state.actions.loadCharacters);
				});
			}
		}, []);
		// GET FAVORITOS
		useEffect(() => {
			const favourites = localStorage.getItem("favourites");
			const linkToCurrent = localStorage.getItem("linkToCurrent");
			if (favourites) {
				state.actions.loadFavouriteFromLocalStorage();
			}
			if (linkToCurrent) {
				state.actions.loadLinkFromLocalStorage();
			}
		}, []);
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
