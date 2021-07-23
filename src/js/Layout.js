import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Inicio } from "./views/Inicio.jsx";
import { Characters } from "./views/Characters.jsx";
import { Planets } from "./views/Planets.jsx";
import { Favourites } from "./views/Favourites.jsx";

import { Specific } from "./component/Specific.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Inicio />
						</Route>
						<Route path="/characters">
							<Characters />
						</Route>
						<Route path="/planets">
							<Planets />
						</Route>
						<Route path="/details">
							<Specific />
						</Route>
						<Route path="/favourites">
							<Favourites />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
