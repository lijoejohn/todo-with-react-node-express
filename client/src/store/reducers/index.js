import { combineReducers } from "redux";

import Dashboard from "./dashboardReducer";
import Auth from "./authReducer";
import UI from "./uiReducer";

import { reducer as formReducer } from "redux-form";

const allReducers = combineReducers({
	form: formReducer,
	Dashboard,
	Auth,
	UI,
});

const rootReducer = (state, action) => {
	return allReducers(state, action);
};

export default rootReducer;
