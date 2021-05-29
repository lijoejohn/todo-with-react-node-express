const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const cors = require("cors");
const morgan = require("morgan");

// DB Drivers and adapters
const low = require("lowdb");
const mongoose = require("mongoose");
const FileSync = require("lowdb/adapters/FileSync");
const { seed } = require("./src/models/seed");

// Application Routers
const tasksRouter = require("./src/endpoints/tasks");
const authRouter = require("./src/endpoints/auth");
const dashboardRouter = require("./src/endpoints/dashboard");

// Auth middleware
// eslint-disable-next-line prefer-destructuring
const authenticateJWT = require("./src/middleware/auth").authenticateJWT;
const { swaggerOptions, mongodbConnectionString } = require("./src/constants/common");

const app = express();
const environment = process.env.NODE_ENV;
const isDevelopment = environment === "dev";
app.isDevelopment = isDevelopment;

// If applications starts in stand alone mode with out mongo Db we will use lowdb
if (isDevelopment) {
	const adapter = new FileSync("db.json");
	const db = low(adapter);
	db.defaults({ tasks: [] }).write();
	app.db = db;
	seed(app);
} else {
	mongoose.connect(mongodbConnectionString, { useUnifiedTopology: true, useNewUrlParser: true });
	const { connection } = mongoose;
	connection.once("open", () => {
		// eslint-disable-next-line no-console
		console.log("MongoDB database connection established successfully");
		seed(app);
	});
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const specs = swaggerJsDoc(swaggerOptions);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs, { explorer: true }));
app.use("/auth", authRouter);
app.use("/tasks", authenticateJWT, tasksRouter);
app.use("/dashboard", authenticateJWT, dashboardRouter);

const port = 5000;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is running on port ${port}`));
