const { user } = require("./model");

const data = {
	apiKey: "demo",
	userName: "demo",
};

const seed = (app) => {
	if (app.isDevelopment) {
		app.db.get("users").remove(data).write();
		app.db.get("users").push(data).write();
	} else {
		user.create(data, (e) => {
			if (e) {
				throw e;
			}
		});
	}
};
module.exports = {
	seed,
};
