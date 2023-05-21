const express = require("express");
const app = express();
const { tasksRouter } = require("./routes/tasksRouter");
const { authRouter } = require("./routes/authRouter");
const { globalErrorHandler } = require("./middlewares/globalErrorHandler");

app.use(express.json());
app.use("/auth", authRouter);
app.use("/tasks", tasksRouter);
app.use(globalErrorHandler);

module.exports = app;
