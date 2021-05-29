import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "../components/dashboard";

export const MainRouter = ({ userData, location }) => {
	return userData ? (
		<Switch location={location}>
			<Route exact path="/">
				<Redirect to="/dashboard" />
			</Route>
			<Route exact path="/dashboard" component={Dashboard} />
			<Route render={() => <Redirect to={{ pathname: "/dashboard" }} />} />
		</Switch>
	) : null;
};
