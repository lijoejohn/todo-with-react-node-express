import fetchHandler from "../../utils/fetchHandler";
import { DASHBOARD } from "../types";

export const getDashboard = (successHandler, errorHandler) => {
	const fetchOptions = {
		url: `dashboard`,
		method: "GET",
		secure: true,
		actionType: DASHBOARD.GET_DASHBOARD_DATA,
	};
	return fetchHandler(fetchOptions, successHandler, errorHandler);
};
export const getTaskList = (successHandler, errorHandler) => {
	const fetchOptions = {
		url: `tasks`,
		method: "GET",
		secure: true,
		actionType: DASHBOARD.GET_DASHBOARD_TASKS,
	};
	return fetchHandler(fetchOptions, successHandler, errorHandler);
};
export const updateTask = (values, successHandler, errorHandler) => {
	const fetchOptions = {
		url: `tasks/${values.id}`,
		method: "PUT",
		secure: true,
		body: JSON.stringify(values),
		actionType: DASHBOARD.UPDATE_TASK,
	};
	return fetchHandler(fetchOptions, successHandler, errorHandler);
};

export const deleteTask = (values, successHandler, errorHandler) => {
	const fetchOptions = {
		url: `tasks/${values.id}`,
		method: "DELETE",
		secure: true,
		actionType: DASHBOARD.DELETE_TASK,
	};
	return fetchHandler(fetchOptions, successHandler, errorHandler);
};

export const createTask = (values, successHandler, errorHandler) => {
	const fetchOptions = {
		url: `tasks`,
		method: "POST",
		secure: true,
		body: JSON.stringify(values),
		actionType: DASHBOARD.CREATE_TASK,
	};
	return fetchHandler(fetchOptions, successHandler, errorHandler);
};
