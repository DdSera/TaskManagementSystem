const express = require("express");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../Controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Protect all task routes using `authMiddleware`
router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
