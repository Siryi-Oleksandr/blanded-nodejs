const express = require("express");
const app = express();
const { tasksRouter } = require("./routes/tasksRouter");
const { globalErrorHandler } = require("./middlewares/globalErrorHandler");

app.use(express.json());
app.use("/tasks", tasksRouter);
app.use(globalErrorHandler);

module.exports = app;
