import express from "express";
import "./db/mongoose.js";
import { User } from "./models/user.js";
import { Tasks } from "./models/task.js";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// opening route just for looking
app.get("/", (req, res) => {
  res.send("welcome to user and tasks database");
});

// add new user by post model
app.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// get all the user collection
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// get user by id
app.get("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// add new task to task collection
app.post("/tasks", async (req, res) => {
  const tasks = new Tasks(req.body);

  try {
    await tasks.save();
    res.send(tasks);
  } catch (error) {
    res.status(400).send(error);
  }
});

//get all the tasks
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Tasks.find({});
    res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

// get one task by ID
app.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Tasks.findById(_id);
    if (!task) {
      return res.status(500).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`the server up in port ${port} `);
});
