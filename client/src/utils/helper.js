export const getLsValue = (key) => {
	const itemStr = localStorage.getItem(key);
	return itemStr;
};
export const setLsValue = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};
