//CURD create update read delete

import mongodb from "mongodb";
import { MongoClient } from "mongodb";
import { ObjectID } from "mongodb";

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionUrl, (error, client) => {
  if (error) {
    return console.log("unable to connect to the databases");
  }
  console.log("connected currently");

  const db = client.db(databaseName);

  // update user by target th id  id = 62b1a51196e5d592c605593f

  db.collection("users")
    .updateOne(
      {
        _id: new ObjectID("62b1a51196e5d592c605593f"),
      },
      {
        $set: {
          name: "loloAfterUpdate",
        },
      }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });

  // updateMany to update all the true to false in the task collection

  db.collection("tasks")
    .updateMany(
      {
        completed: true,
      },
      {
        $set: {
          completed: false,
        },
      }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
});
