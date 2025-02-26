const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const Task = require("../models/Task");

const router = express.Router();

// Create Task
router.post("/tasks", authMiddleware, async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = new Task({ user: req.user, title, description });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get All Tasks
router.get("/tasks", authMiddleware, async (req, res) => {
  const tasks = await Task.find({ user: req.user });
  res.json(tasks);
});

// Update Task
router.put("/tasks/:id", authMiddleware, async (req, res) => {
  const { title, description, is_completed } = req.body;
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { title, description, is_completed },
    { new: true }
  );
  res.json(task);
});

// Delete Task
router.delete("/tasks/:id", authMiddleware, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted successfully" });
});

module.exports = router;
