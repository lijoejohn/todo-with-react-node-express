import { DASHBOARD } from "../types";

export default (state = { reload: false }, action) => {
	switch (action.type) {
		case DASHBOARD.GET_DASHBOARD_DATA: {
			return {
				...state,
				data: action.payload ? action.payload : {},
			};
		}
		case DASHBOARD.GET_DASHBOARD_TASKS: {
			return {
				...state,
				taskList: action.payload ? action.payload : {},
			};
		}
		case DASHBOARD.UPDATE_TASK: {
			return {
				...state,
				reload: !state.reload,
			};
		}
		case DASHBOARD.CREATE_TASK: {
			return {
				...state,
				reload: !state.reload,
			};
		}
		case DASHBOARD.DELETE_TASK: {
			return {
				...state,
				reload: !state.reload,
			};
		}
		default:
			return state;
	}
};
