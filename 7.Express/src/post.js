import express from "express";
import bodyParser from "body-parser";

const app = express();

app.listen(3000, () => {
  console.log("the server is up on port 3000");
});

// 1.0 ===> post with bodyParser. npm i

// const bodyParserMw = bodyParser.urlencoded({
//     extended: true,
//   });

// app.get("/", (req, res, next) => {
//   res.write("<h1>post request  <h1>");
//   res.write(`<form action='/' method='POST'>`);
//   res.write(`<input type="text" name="userName">`);
//   res.write(`<input type="number" name="age">`);
//   res.write(`<input type="submit">`);
//   res.write("</form>");
//   res.end();
// });

// app.post("/", bodyParserMw, (req, res, next) => {
//   console.log(req.body);
//   res.send("done");
// });

// 2.o ==> post request with express

app.use(express.json()); //parser the data to post request other way the res post will be undefine

let players = [
  { name: "ronaldo", nation: "brazil", position: "FW", shirt: "9" },
  { name: "zidan", nation: "france", position: "MD", shirt: "10" },
  { name: "ramos", nation: "spain", position: "CD", shirt: "4" },
];
app.get("/", (req, res, next) => {
  res.send(players);
});

app.post("/", (req, res) => {
  players.push(req.body);
  res.send(201);
});

// delete the last element
app.delete("/", (req, res) => {
  players.pop();
  res.send(201);
});
