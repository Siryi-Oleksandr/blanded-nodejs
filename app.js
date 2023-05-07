const express = require("express");
const app = express();
const { tasksRouter } = require("./routes/tasksRouter");

app.use("/tasks", tasksRouter);

module.exports = app;
