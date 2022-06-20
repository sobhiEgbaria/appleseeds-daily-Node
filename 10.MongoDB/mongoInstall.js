import express from "express";
import { MongoClient } from "mongodb";

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("the server is up on port 3000");
});
MongoClient.connect("mongodb://localhost:27017", (err, client) => {
  console.log("connected to database");

  let db = client.db("realMadrid");
});
