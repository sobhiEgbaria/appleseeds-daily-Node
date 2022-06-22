import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import express from "express";
import { aboutRouter } from "./about-router.js";

import { weatherStack } from "../../6.weatherApp/callbacksApi.js";

const app = express();
const PORT = 3000;

//1.0 ==> middleware ==> (app.use) function that run with every request

//1.1 ==> syntax 1 to routing home and about
// app.use((req, res, next) => {
//   if (req.url === "/about") {
//     res.send("<h1>gogo lolo from about<h1>");
//   } else {
//     res.send("<h1>gogo lolo from home<h1>");
//   }
// });
//**************************************************************************************** */

// 1.2 ===> syntax 2 to routing home and about.

// //res.all answer all the request methods (get post put delete)
//  //res.all  vs  res.use
// //==> res.all use all the path (/about...)
// //==> res.use use just the start of the path = from (/about...) take (/)

// app.all("/", (req, res, next) => {
//   res.send("<h1>gogo lolo from home <h1>");
// });

// app.all("/about", (req, res, next) => {
//   res.send("<h1>gogo lolo from about<h1>");
// });

// app.use((req, res, next) => {
//   res.send("<h1>ERROR 404 <h1>");
// });
//**************************************************************************************** */

// // 1.3 ==>  the request method (get) && add html file to res.send

// console.log(__dirname);
// console.log(__filename);
//ECMAScript module which do not contain __dirname. use  // https://stackoverflow.com/questions/64383909/dirname-is-not-defined-in-node-14-version
// console.log(path.join(__filename));

// html file as a static home page using path.join and ex...static
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

////robot page route using get and hbs (dynamic)
const viewsPath = path.join(__dirname, "../public");
app.set("view engine", "hbs");
app.set("views", viewsPath);
app.get("/robot", (req, res, next) => {
  res.render("robot");
});

//index route using get and hbs file (dynamic) with  weatherStack callback
const weatherPath = path.join(__dirname, "../public");
app.set("weather", weatherPath);
app.get("/", (req, res, next) => {
  res.render("weather");
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({ error: "pleas set an address" });
  }

  weatherStack(req.query.address, (resData) => {
    res.send({
      location: req.query.address,
      forecast: resData,
    });
  });
});

// about page using
app.use(aboutRouter);

// error page
app.use((req, res, next) => {
  res.send("<h1>ERROR 404 <h1>");
});

// set up the server up
app.listen(PORT, () => {
  console.log(`the server listen in port ${PORT} `);
});

// ===> post request
