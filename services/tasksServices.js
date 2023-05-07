const fs = require("fs/promises");
const path = require("path");

const tasksPath = path.join(process.cwd(), "db", "tasks.json");

const getTasksService = async () => {
  const tasks = await fs.readFile(tasksPath);
  return JSON.parse(tasks);
};

const getTaskByIdService = async (id) => {
  const tasks = await getTasksService();
  return tasks.find((task) => task.id === id);
};

module.exports = { getTasksService, getTaskByIdService };
