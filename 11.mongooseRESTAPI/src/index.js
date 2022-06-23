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
  // console.log(req.params);
  // console.log(req.params.id);
  // console.log(req.body);
  // console.log(req.body.name);

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

//update user by id
app.patch("/users/:id", async (req, res) => {
  const _id = req.params.id;
  const updates = Object.keys(req.body);
  const allowUpdates = ["name", "age", "Email", "password"];

  const isValidOperation = updates.every((item) => {
    return allowUpdates.includes(item);
  });

  // console.log(updates);
  if (!isValidOperation) {
    return res.status(400).send("error: invalid update");
  }

  try {
    const user = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findByIdAndDelete(_id);

    if (!user) {
      return res.status(404).send("the user not found");
    }
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
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

//update  task by target the id
app.patch("/tasks/:id", async (req, res) => {
  const _id = req.params.id;

  const validToUpdate = ["completed"];
  const ToUpdate = Object.keys(req.body);

  const isValidUpdate = ToUpdate.every((item) => {
    return validToUpdate.includes(item);
  });

  if (!isValidUpdate) {
    return res.status(400).send("error: invalid update");
  }

  try {
    const task = await Tasks.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete("/tasks/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Tasks.findByIdAndDelete(_id);

    if (!task) {
      return res.status(404).send("the task not found");
    }
    res.send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`the server up in port ${port} `);
});
