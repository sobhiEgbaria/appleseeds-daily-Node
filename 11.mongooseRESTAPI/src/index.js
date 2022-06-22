import express from "express";
import "./db/mongoose.js";
import { User } from "./models/user.js";
import { Tasks } from "./models/task.js";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.post("/users", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.post("/tasks", (req, res) => {
  const tasks = new Tasks(req.body);

  tasks
    .save()
    .then(() => {
      res.send(tasks);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.listen(port, () => {
  console.log(`the server up in port ${port} `);
});
