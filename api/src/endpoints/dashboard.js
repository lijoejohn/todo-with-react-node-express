const express = require("express");
const { find } = require("../models/task");

const router = express.Router();

// const DELAY = 1000;

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Dashboard:
 *        type: object
 */

/**
 *  @swagger
 *  tags:
 *    name: Dashboard
 *    description: API for Dashboard data.
 */

/**
 *  @swagger
 *  /dashboard:
 *    get:
 *      summary: Get Dashboard data.
 *      tags: [Dashboard]
 *
 *      responses:
 *        200:
 *          description: Retrieve Dashboard data.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *              example: {
 *                  "tasksCompleted": 20,
 *                  "totalTasks":100,
 *                  "latestTasks":[{"name": "Refactor something","completed": false
}]
 *                 }
 */
router.get("/", async (req, res) => {
	const completedTasks = await find({ data: { completed: true }, app: req.app });
	const allTasks = await find({ app: req.app });
	const result = {
		tasksCompleted: completedTasks.length,
		totalTasks: allTasks.length,
		latestTasks: allTasks.slice(0, 3),
	};
	res.send(result);
});
module.exports = router;
