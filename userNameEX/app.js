import express from "express";
import { MongoClient } from "mongodb";

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("the server is up on port 3000");
});

app.get("/", (req, res, next) => {
  res.send("hi");
  //   MongoClient.connect("mongodb://localhost:27017", (err, client) => {
  //     let db = client.db("usersEx");

  //     db.collection("users")
  //       .find()
  //       .toArray()
  //       .then((users) => {
  //         console.log(users);
  //       });

  //     res.send(users);

  //     // client.close();
  //   });
});

app.post("/", (req, res, next) => {
  MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    console.log("connected to database");

    let db = client.db("usersEx");

    db.collection("users")
      .insertOne({
        name: req.body.name,
        age: +req.body.age,
      })
      .then(() => {
        client.close();
      });
  });
});
