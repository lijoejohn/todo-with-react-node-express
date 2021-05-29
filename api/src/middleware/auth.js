const jwt = require("jsonwebtoken");
const { accessTokenSecret } = require("../constants/common");

module.exports = {
	authenticateJWT: (req, res, next) => {
		const authHeader = req.headers.authorization;
		if (authHeader) {
			const token = authHeader.split(" ")[1];
			jwt.verify(token, accessTokenSecret, (err, user) => {
				if (err) {
					return res.sendStatus(403);
				}
				req.user = user;
				return next();
			});
		} else {
			res.sendStatus(401);
		}
	},
};
