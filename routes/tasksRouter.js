const express = require("express");
const {
  getTasksService,
  getTaskByIdService,
} = require("../services/tasksServices");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const tasks = await getTasksService();
  res.status(200).json(tasks);
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const task = await getTaskByIdService(id);
  res.status(200).json(task);
});

module.exports = { tasksRouter: router };
