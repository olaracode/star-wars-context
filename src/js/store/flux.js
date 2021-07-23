const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			linkToCurrent: ""
		},
		actions: {
			// Carga del estado
			loadPlanetsFromLocalHost: () => {
				setStore({
					planets: JSON.parse(localStorage.getItem("planets"))
				});
			},
			loadCharactersFromLocalHost: () => {
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
				localStorage.setItem("planets", JSON.stringify(planetList));
			},
			// Manejo de informacion
			getTopCharacters: () => {
				const characters = getStore().characters;
				const topCharacters = characters.filter(character => {
					if (character.uid <= 4) {
						return character;
					}
				});
				return topCharacters;
			},
			getTopPlanets: () => {
				const planets = getStore().planets;
				const topPlanets = planets.filter(planet => {
					if (planet.uid <= 4) {
						return planet;
					}
				});
				return topPlanets;
			},
			setCurrent: link => {
				console.log(link);
				setStore({ linkToCurrent: link });
			}
		}
	};
};

export default getState;
