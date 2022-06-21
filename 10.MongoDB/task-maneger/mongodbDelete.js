//CURD create update read delete

import mongodb from "mongodb";
import { MongoClient } from "mongodb";

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect to the databases");
    }
    console.log("connected currently");

    const db = client.db(databaseName);
    db.collection("users").insertMany();
  }
);
