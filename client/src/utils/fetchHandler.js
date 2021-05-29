const rootURL = process.env.REACT_APP_ROOT_URL;
const LSVariable = process.env.REACT_APP_LS_VAR;

export default function fetchHandler(
	{ url, method = "GET", actionType, headers, body, secure = true },
	successHandler = null,
	errorHandler = null
) {
	return (dispatch) => {
		const triggerSuccessHandler = (response) => {
			dispatch({
				type: actionType,
				payload: response,
			});
			return successHandler ? successHandler(response) : null;
		};

		const LSString = localStorage.getItem(LSVariable);
		const LSToken = LSString ? JSON.parse(LSString) : null;
		const accessToken = LSToken?.accessToken;

		let headersData = {
			...headers,
			Accept: "application/json",
			"Content-Type": "application/json",
		};

		if (secure) {
			headersData = {
				...headersData,
				Authorization: `Bearer ${accessToken}`,
			};
		}

		const request = fetch(`${rootURL}${url}`, {
			method,
			headers: {
				...headersData,
			},
			body,
		});

		let status = null;
		request
			.then((data) => {
				status = data.status;
				return data.json();
			})
			.then((response) => {
				if (status && status > 399) {
					return errorHandler ? errorHandler(response) : null;
				} else {
					return triggerSuccessHandler(response);
				}
			})
			.catch((err) => {
				const errorObj = {
					error: {
						url: `${rootURL}${url}`,
						code: "FETCH_FAILED",
						message: err,
					},
				};
				return errorHandler ? errorHandler(errorObj) : null;
			});

		return {
			type: actionType,
			payload: request,
		};
	};
}
