const {
  getTasksService,
  getTaskByIdService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
} = require("../services/tasksServices");
const controllerWrapper = require("../utils/controllerWrapper");

let getTasks = async (req, res) => {
  const { page = 1, limit = 10, completed } = req.query;
  const tasks = await getTasksService(page, limit, completed);
  res.status(200).json(tasks);
};

getTasks = controllerWrapper(getTasks);

const getTaskById = controllerWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await getTaskByIdService(id);
  res.status(200).json(task);
});

const createTask = controllerWrapper(async (req, res) => {
  const body = req.body;
  const newTask = await createTaskService(body);
  return res.status(201).json(newTask);
});

const updateTask = controllerWrapper(async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updatedTask = await updateTaskService(id, body);
  res.status(200).json(updatedTask);
});

const deleteTask = controllerWrapper(async (req, res) => {
  const { id } = req.params;
  await deleteTaskService(id);
  //   res.sendStatus(204);
  res.status(200).json({ id });
});

module.exports = { getTasks, getTaskById, createTask, updateTask, deleteTask };
