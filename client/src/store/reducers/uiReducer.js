import { UI } from "../types";

export default (state = {}, action) => {
	switch (action.type) {
		case UI.SHOW_LOADER: {
			return {
				...state,
				loading: action.payload ? action.payload : false,
			};
		}
		default:
			return state;
	}
};
