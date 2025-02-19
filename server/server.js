require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();

app.use(express.json());

connectDB();

app.set("view engine", "ejs");
app.use("/api/tasks", require("./routes/taskRoutes"));

//const userRouter = require("./routes/users");
// const postRouter = require("./routes/posts");

//app.use("/users", userRouter);
// app.use("/posts", postRouter);

app.listen(3000);
