const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const tasksPath = path.join(process.cwd(), "db", "tasks.json");

const getTasksService = async () => {
  const tasks = await fs.readFile(tasksPath);
  return JSON.parse(tasks);
};

const getTaskByIdService = async (id) => {
  const tasks = await getTasksService();
  return tasks.find((task) => task.id === id);
};

const createTaskService = async (data) => {
  const tasks = await getTasksService();
  const newTask = { id: crypto.randomUUID(), ...data };
  tasks.push(newTask);
  await fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2));
  return newTask;
};

const updateTaskService = async (id, data) => {
  const tasks = await getTasksService();
  let task = tasks.find((task) => task.id === id);
  if (!task) {
    throw new Error("task not found");
  }
  task = { ...task, ...data };
  await fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2));
  return task;
};

const deleteTaskService = async (id) => {
  const tasks = await getTasksService();
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) {
    throw new Error("task not found");
  }
  tasks.splice(index, 1);
  await fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2));
  return id;
};

module.exports = {
  getTasksService,
  getTaskByIdService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
};
