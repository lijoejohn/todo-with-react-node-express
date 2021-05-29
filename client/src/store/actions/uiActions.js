import { UI } from "../types";
export const showLoader = (value) => {
	return {
		type: UI.SHOW_LOADER,
		payload: value,
	};
};
