const { user } = require("./model");

const findUser = ({ data = {}, app }) => {
	if (app.isDevelopment) {
		return app.db.get("users").find(data).value();
	} else {
		return user.findOne(data, (err, result) => {
			if (err) {
				return err;
			} else {
				return result;
			}
		});
	}
};
module.exports = {
	findUser,
};
