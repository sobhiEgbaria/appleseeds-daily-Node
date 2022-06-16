import express from "express";

const app = express();

//middleware ==> app.use function that run with every request

app.use((req, res, next) => {
  if (req.url === "/about") {
    res.send("<h1>gogo lolo from about<h1>");
  } else {
    res.send("<h1>gogo lolo from home<h1>");
  }
});

app.use((req, res) => {
  console.log("<h1>gogo lolo 2<h1>");
});

app.listen(3000, () => {
  console.log("the server listen in port 3000 ");
});
