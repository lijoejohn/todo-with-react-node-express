import { SESSION } from "../types";

export default (state = {}, action) => {
	switch (action.type) {
		case SESSION.SEND_LOGIN_CREDENTIALS:
			return {
				...state,
				userDetails: action.payload,
				accessToken: action.payload.accessToken,
			};
		default:
			return state;
	}
};
