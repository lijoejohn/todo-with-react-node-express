import fetchHandler from "../../utils/fetchHandler";
import { SESSION } from "../types";

export const sendLoginCredentials = (values, successHandler, errorHandler) => {
	const fetchOptions = {
		url: `auth`,
		method: "POST",
		secure: false,
		body: JSON.stringify(values),
		actionType: SESSION.SEND_LOGIN_CREDENTIALS,
	};
	return fetchHandler(fetchOptions, successHandler, errorHandler);
};
