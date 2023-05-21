const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const Task = mongoose.model("task", schema);

module.exports = Task;
