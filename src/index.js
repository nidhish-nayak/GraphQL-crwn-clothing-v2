import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { CartProvider } from "./contexts/cart.context";
import { CategoriesProvider } from "./contexts/categories.context";
import { UserProvider } from "./contexts/user.context";

import "./index.scss";

const client = new ApolloClient({
	uri: "https://crwn-clothing.com/",
	cache: new InMemoryCache(),
});

const rootElement = document.getElementById("root");

render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<BrowserRouter>
				<UserProvider>
					<CategoriesProvider>
						<CartProvider>
							<App />
						</CartProvider>
					</CategoriesProvider>
				</UserProvider>
			</BrowserRouter>
		</ApolloProvider>
	</React.StrictMode>,
	rootElement
);
