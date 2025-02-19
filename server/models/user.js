const mongoose = require("mongoose");

const UserSchema = new mongoose.schema({
  email: { type: String, required: true, unique: true },
  password: { type: string, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("user", UserSchema);
