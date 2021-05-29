const { sortBy } = require("lodash");
const { task } = require("./model");

const find = ({ data = {}, app }) => {
	if (app.isDevelopment) {
		let tasks = app.db.get("tasks").value();
		if (data.completed) {
			tasks = tasks.filter((item) => item.completed);
		}
		sortBy(tasks, [(o) => o.id]);
		return tasks;
	} else {
		return task.find(data, [], { sort: { createdAt: -1 } }, (err, result) => {
			if (err) {
				return err;
			} else {
				return result;
			}
		});
	}
};

const create = ({ data = {}, app }) => {
	if (app.isDevelopment) {
		app.db.get("tasks").push(data).write();
		return data;
	} else {
		return task.create(data, (err) => {
			if (err) {
				return err;
			} else {
				return data;
			}
		});
	}
};

const patch = ({ data = {}, app }) => {
	if (app.isDevelopment) {
		app.db.get("tasks").find({ id: data.id }).assign(data).write();
		return data;
	} else {
		const query = { id: data.id };
		return task.updateOne(query, data, (err) => {
			if (err) {
				return err;
			} else {
				return data;
			}
		});
	}
};

const remove = ({ data = {}, app }) => {
	if (app.isDevelopment) {
		app.db.get("tasks").remove({ id: data.id }).write();
		return data;
	} else {
		const query = { id: data.id };
		return task.deleteOne(query, (err) => {
			if (err) {
				return err;
			} else {
				return data;
			}
		});
	}
};
module.exports = {
	find,
	create,
	patch,
	remove,
};
