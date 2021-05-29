const mongoose = require("mongoose");

const { Schema } = mongoose;

const task = new Schema(
	{
		id: {
			type: String,
		},
		name: {
			type: String,
		},
		completed: {
			type: Boolean,
		},
	},
	{ timestamps: true },
	{ collection: "Tasks" },
);

const user = new Schema(
	{
		apiKey: {
			type: String,
		},
		userName: {
			type: String,
		},
	},
	{ collection: "Users" },
);

module.exports = {
	task: mongoose.model("tasks", task),
	user: mongoose.model("users", user),
};
