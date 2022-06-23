import express from "express";
import { Tasks } from "../models/task.js";

const taskRoute = new express.Router();

// add new task to task collection
taskRoute.post("/tasks", async (req, res) => {
  const tasks = new Tasks(req.body);

  try {
    await tasks.save();
    res.send(tasks);
  } catch (error) {
    res.status(400).send(error);
  }
});

//get all the tasks
taskRoute.get("/tasks", async (req, res) => {
  try {
    const tasks = await Tasks.find({});
    res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

// get one task by ID
taskRoute.get("/tasks/:id", async (req, res) => {
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
taskRoute.patch("/tasks/:id", async (req, res) => {
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
      return res.status(404).send("the task not found");
    }
    res.send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

taskRoute.delete("/tasks/:id", async (req, res) => {
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

export default taskRoute;
