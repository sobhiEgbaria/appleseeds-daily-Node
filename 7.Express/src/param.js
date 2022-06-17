import express from "express";

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("the server is up on port 3000");
});

let players = [
  { name: "ronaldo", nation: "brazil", position: "FW", shirt: "9" },
  { name: "zidan", nation: "france", position: "MD", shirt: "10" },
  { name: "ramos", nation: "spain", position: "CD", shirt: "4" },
];
app.get("/", (req, res, next) => {
  res.send(players);
});

app.get("/:about", (req, res, next) => {
  res.send(req.params.about);
});
