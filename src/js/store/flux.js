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
			// Funcion para revisar si es favorito y asi asignar el css correspondiente
			isFavourite: name => {
				const favourites = getStore().favourites;
				let isFavourite = false;
				favourites.map(favourite => {
					if (favourite.name == name) {
						isFavourite = true;
					}
				});
				return isFavourite;
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
						// Si no hay favoritos
						setStore({ favourites: [favourite] }); // Se asigna el nuevo favorito como una lista con un solo elemento
						localStorage.setItem("favourites", JSON.stringify(getStore().favourites));
					} else {
						setStore({ favourites: [...favouriteList, favourite] }); // Si ya existen los favoritos se usa el spreadOperator(...) para asignar el nuevo valor a favoritos
						localStorage.setItem("favourites", JSON.stringify(getStore().favourites));
					}
				}
			},

			//Eliminar favorito
			removeFavourite: id => {
				const favourites = getStore().favourites;
				// Se crea una nueva lista que contenga todos los elementos menos al que se esta eliminando
				const filteredList = favourites.filter(favourite => {
					if (favourite.uid !== id) {
						return favourite;
					}
				});
				setStore({ favourites: filteredList }); // Se asigna esa nueva lista a favoritos
				if (filteredList.length < 1) {
					localStorage.removeItem("favourites"); // Para evitar problemas, si el largo de la lista es inferior a uno se elimina la variable favourites de localStorage
				} else {
					localStorage.setItem("favourites", JSON.stringify(filteredList)); // En caso contrario sencillamente se modifica su valor
				}
			},
			setCurrent: link => {
				setStore({ linkToCurrent: link });
				localStorage.setItem("link", link);
			}
		}
	};
};

export default getState;
