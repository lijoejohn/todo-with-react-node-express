const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();
const { accessTokenSecret } = require("../constants/common");
const { findUser } = require("../models/user");

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Login:
 *        type: object
 *        required:
 *          - userName
 *          - apiKey
 *        properties:
 *          userName:
 *            type: string
 *            description: User Name to login.
 *          apiKey:
 *            type: string
 *            description: apiKey to login.
 *        example:
 *           userName: test_user
 *           apiKey: qazxswert
 */

/**
 *  @swagger
 *  tags:
 *    name: Login
 *    description: API to Login.
 */

/**
 *  @swagger
 *  /auth:
 *    post:
 *      summary: Login API.
 *      tags: [Login]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Login'
 *      responses:
 *        200:
 *          description: Login.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Login'
 *        500:
 *          description: Server error
 */
router.post("/", async (req, res) => {
	try {
		// Read username and password from request body
		const { userName, apiKey } = req.body;
		const user = await findUser({ data: { userName, apiKey }, app: req.app });
		if (user) {
			// Generate an access token
			const accessToken = jwt.sign({ username: user.userName }, accessTokenSecret);
			return res.send({ accessToken });
		} else {
			return res.status(401).send({ error: "Login Not valid" });
		}
	} catch (error) {
		return res.status(500).send(error);
	}
});
module.exports = router;
