export const required = (value) => {
	if (
		(typeof value === "number" && (value || value === 0)) ||
		(value && value instanceof Array && value.length) ||
		(value && typeof value === "object" && Object.keys(value).length) ||
		(value && typeof value === "string" && value && value !== "") ||
		(value && typeof value === "boolean")
	) {
		return undefined;
	}
	return "This is a required field";
};

export const email = (value) =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? "Please enter a valid email address" : undefined;
