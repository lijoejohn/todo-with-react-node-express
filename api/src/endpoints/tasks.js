const express = require("express");
const { nanoid } = require("nanoid");
const { find, create, patch, remove } = require("../models/task");

const router = express.Router();

const idlength = 8;

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Task:
 *        type: object
 *        required:
 *          - name
 *        properties:
 *          name:
 *            type: string
 *            description: The name of the Task.
 *          completed:
 *            type: boolen
 *            description: completed of the Task
 *        example:
 *           id: d5fE_asz
 *           name: Send Mail
 *           completed: false
 */

/**
 *  @swagger
 *  tags:
 *    name: Task
 *    description: API to manage the Task.
 */

/**
 *  @swagger
 *  /tasks:
 *    get:
 *      summary: Get all tasks.
 *      tags: [Task]
 *
 *      responses:
 *        200:
 *          description: Retrieve all tasks data.
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Task'
 */
router.get("/", async (req, res) => {
	const tasks = await find({ app: req.app });
	res.send(tasks);
});

/**
 *  @swagger
 *  /tasks:
 *    post:
 *      summary: Add a new task.
 *      tags: [Task]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *            example: {
 *                  "name": "Refactor something"
 *                 }
 *      responses:
 *        200:
 *          description: Add a new task to the list.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Task'
 *        500:
 *          description: Server error
 */
router.post("/", async (req, res) => {
	try {
		const task = {
			id: `${new Date().getTime()}${nanoid(idlength)}`,
			...req.body,
			completed: false,
		};
		await create({ data: task, app: req.app });
		return res.send(task);
	} catch (error) {
		return res.status(500).send(error);
	}
});

/**
 *  @swagger
 *  /tasks/{id}:
 *    put:
 *      summary: Edit a task.
 *      tags: [Task]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: ID of the task to edit
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *            example: {
 *                  "name": "Refactor something",
 *                  "completed":true
 *                 }
 *      responses:
 *        200:
 *          description: OK. Returns the new task object after editing.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Task'
 *        404:
 *          description: The Task not found
 *        500:
 *          description: Server error
 */
router.put("/:id", async (req, res) => {
	try {
		await patch({ data: { id: req.params.id, ...req.body }, app: req.app });
		return res.send(req.body);
	} catch (e) {
		return res.status(500).send(e);
	}
});

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Delete a task.
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Delete a task by ID
 *     responses:
 *       200:
 *         description: The Task was deleted
 *       404:
 *         description: The Task not found.
 */
router.delete("/:id", async (req, res) => {
	await remove({ data: { id: req.params.id }, app: req.app });
	return res.send({ id: req.params.id });
});

module.exports = router;
