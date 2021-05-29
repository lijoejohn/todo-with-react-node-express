const accessTokenSecret = "sampletodoapp";
const mongodbConnectionString = "mongodb://mongo:27017/tasks";
const swaggerOptions = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Simple Task Manager API",
			version: "1.0.0",
			description: "This is the API documentation for the Simple Task Manager",
		},
		servers: [
			{
				url: `http://localhost:5000`,
			},
		],
		security: [
			{
				"API Key": ["read", "write"],
			},
		],
		components: {
			schemas: {
				Task: {
					type: "object",
					properties: {
						name: {
							type: "string",
							description: "The task name.",
						},
						completed: {
							type: "boolean",
							description: "Indicator if a task is completed or not.",
						},
					},
					example: {
						name: "Refactor something",
						completed: false,
					},
				},
				Login: {
					type: "object",
					properties: {
						userName: {
							type: "string",
							description: "User Name.",
						},
						apiKey: {
							type: "string",
							description: "Api Key",
						},
					},
					example: {
						userName: "a",
						apiKey: "a",
					},
				},
			},
			securitySchemes: {
				"API Key": {
					type: "apiKey",
					name: "Authorization",
					in: "header",
				},
			},
		},
	},
	apis: ["./src/endpoints/*.js"],
};
module.exports = {
	accessTokenSecret,
	swaggerOptions,
	mongodbConnectionString,
};
