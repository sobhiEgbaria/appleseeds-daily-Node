import express from "express";
import players from "./data.js";

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("the server is up on port 3000");
});

app.get("/", (req, res, next) => {
  res.send("real madrid data player");
});

// query param ===> filtering
app.get("/players", (req, res, next) => {
  const { nation } = req.query;
  if (nation != undefined) {
    const filteringByNation = players.filter((obj) => {
      return nation === obj.nation;
    });

    res.send(filteringByNation);
  } else {
    res.send(players);
  }
});

// git a obj of player by name
app.get("/players/:player", (req, res, next) => {
  const { player } = req.params; // === const anyConst = req.params.player;
  const playerData = players.find((obj) => {
    return obj.name === player;
  });
  console.log(req.query);

  res.send(playerData);
});
