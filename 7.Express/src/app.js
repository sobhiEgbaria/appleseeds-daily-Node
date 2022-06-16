import express from "express";
import { aboutRouter } from "./about-router.js";

const app = express();

//1.0 ==> middleware ==> (app.use) function that run with every request

//1.1 ==> syntax 1 to routing home and about
// app.use((req, res, next) => {
//   if (req.url === "/about") {
//     res.send("<h1>gogo lolo from about<h1>");
//   } else {
//     res.send("<h1>gogo lolo from home<h1>");
//   }
// });

// 1.2 ===> syntax 2 to routing home and about.
// res.all answer all the request methods (get post put delete)
// res.all  vs  res.use
//==> res.all use all the path (/about...)
//==> res.use use just the start of the path = from (/about...) take (/)

// app.all("/", (req, res, next) => {
//   res.send("<h1>gogo lolo from home <h1>");
// });

// app.all("/about", (req, res, next) => {
//   res.send("<h1>gogo lolo from about<h1>");
// });

// app.use((req, res, next) => {
//   res.send("<h1>ERROR 404 <h1>");
// });

// 1.3 the request method (get post put delete)

app.get("/", (req, res, next) => {
  res.send("<h1>gogo lolo from home <h1>");
});

app.use(aboutRouter);

app.use((req, res, next) => {
  res.send("<h1>ERROR 404 <h1>");
});

app.listen(3000, () => {
  console.log("the server listen in port 3000 ");
});
