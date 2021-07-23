import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			linkToCurrent: "",
			favourites: [],
			currentDisplay: {}
		},
		actions: {
			// Carga del estado
			loadFavouriteFromLocalStorage: () => {
				setStore({
					favourites: JSON.parse(localStorage.getItem("favourites"))
				});
			},
			loadLinkFromLocalStorage: () => {
				setStore({
					linkToCurrent: localStorage.getItem("link")
				});
			},
			loadPlanetsFromLocalStorage: () => {
				setStore({
					planets: JSON.parse(localStorage.getItem("planets"))
				});
			},
			loadCharactersFromLocalStorage: () => {
				setStore({
					characters: JSON.parse(localStorage.getItem("characters"))
				});
			},
			loadCharacters: characterList => {
				setStore({ characters: characterList });
				localStorage.setItem("characters", JSON.stringify(characterList));
			},
			loadPlanets: planetList => {
				setStore({ planets: planetList });
				// Se guardan en local storage para no tener que repetir el llamado al api
				localStorage.setItem("planets", JSON.stringify(planetList));
			},

			// Manejo de informacion
			getCurrentDisplay: async () => {
				try {
					const getCurrent = await axios
						.get(getStore().linkToCurrent)
						.then(response => console.log(response.data.results));
					console.log(getCurrent);
					setStore({ currentDisplay: getCurrent });
				} catch (err) {
					return err;
				}
			},
			// Nuevo Favorito
			addFavourites: favourite => {
				const favouriteList = getStore().favourites; // Asigna una variable local con la lista
				let isInside;
				// map dentro de la variable
				favouriteList.map(currentFavourite => {
					// Si el nuevo favorito ya esta en la lista
					if (currentFavourite.name === favourite.name) {
						isInside = true; // se asigna el valor true
					}
				});
				// Si no esta en la lista
				if (!isInside) {
					// Modifica el estado con el nuevo favorito
					if (favouriteList.length < 1) {
						setStore({ favourites: [favourite] });
						localStorage.setItem("favourites", JSON.stringify(getStore().favourites));
					} else {
						setStore({ favourites: [...getStore().favourites, favourite] });
						localStorage.setItem("favourites", JSON.stringify(getStore().favourites));
					}
				}
			},
			setCurrent: link => {
				console.log(link);
				setStore({ linkToCurrent: link });
				localStorage.setItem("link", link);
			}
		}
	};
};

export default getState;
