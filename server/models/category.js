const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: { type: string, required: true },
  user: {
    type: mongoose,
    Schema,
    Types,
    objectId,
    ref: "user",
    required: true,
  },
});

module.exports = mongoose.model("Category", CategorySchema);
