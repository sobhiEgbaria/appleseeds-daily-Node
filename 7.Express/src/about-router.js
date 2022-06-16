import express from "express";

export const aboutRouter = express.Router();

aboutRouter.all("/about", (req, res, next) => {
  res.send("<h1>gogo lolo from about<h1>");
});
