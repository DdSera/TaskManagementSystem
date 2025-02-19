const Task = require("../models/Task");

// **Get all tasks for logged-in user**
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// **Create a new task**
exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate, priority, status } = req.body;
    const task = new Task({
      title,
      description,
      dueDate,
      priority,
      status,
    });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// **Fix: Ensure updateTask is properly exported**
exports.updateTask = async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);
    console.log(task);
    if (!task) return res.status(404).json({ error: "Task not found" });

    // // Ensure the task belongs to the logged-in user
    // if (task.user.toString() !== req.user.id) {
    //   return res.status(403).json({ error: "Unauthorized" });
    // }

    task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// **Delete task**
exports.deleteTask = async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    console.log(task);
    // Ensure the task belongs to the logged-in user
    // if (task.user.toString() !== req.user.id) {
    //   return res.status(403).json({ error: "Unauthorized" });
    // }

    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
