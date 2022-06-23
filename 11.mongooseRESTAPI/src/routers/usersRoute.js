import express from "express";
import { User } from "../models/user.js";

const userRoute = new express.Router();

// add new user by post model
userRoute.post("/users", async (req, res) => {
  const user = new User(req.body);
  finishing;
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// get all the user collection
userRoute.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// get user by id
userRoute.get("/users/:id", async (req, res) => {
  // console.log(req.params);
  // console.log(req.params.id);
  // console.log(req.body);
  // console.log(req.body.name);

  const _id = req.params.id;

  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send("the users not found");
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

//update user by id
userRoute.patch("/users/:id", async (req, res) => {
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
      return res.status(404).send("the users not found");
    }
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

userRoute.delete("/users/:id", async (req, res) => {
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

export default userRoute;
