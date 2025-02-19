const mongoose = require("mongoose");

const TaskShema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  status: {
    type: String,
    enum: ["pending", "Completed"],
    default: "Completed",
  },
  //category: { type: mongoose, Schema, Types, ObjectId, ref: "Category" },
  // //user: {
  //   type: mongoose,
  //   Schema,
  //   Types,
  //   objectId,
  //   ref: "user",
  //   required: true,
  // },
});

module.exports = mongoose.model("Task", TaskShema);
