import express from "express";

const indexRouter = new express.Router();

indexRouter.get("/", (req, res) => {
  res.send("welcome to user and tasks database from routers file");
});

export default indexRouter;
