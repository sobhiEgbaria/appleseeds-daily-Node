//CURD create update read delete

import mongodb from "mongodb";
import { MongoClient } from "mongodb";

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionUrl, (error, client) => {
  if (error) {
    return console.log("unable to connect to the databases");
  }
  console.log("connected currently");

  const db = client.db(databaseName);

  // delete the multiple user with age of 21
  db.collection("users")
    .deleteMany({
      age: "21",
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });

  // delete one task by  desecration "do the first task"

  db.collection("tasks")
    .deleteOne({
      desecration: "do the first task",
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
});
