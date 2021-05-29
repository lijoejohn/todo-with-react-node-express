import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import SignIn from "../components/session";

export const SessionRouter = ({ location }) => (
	<Switch location={location}>
		<Route exact path="/signin" component={SignIn} />
		<Redirect to="/signin" />
	</Switch>
);
