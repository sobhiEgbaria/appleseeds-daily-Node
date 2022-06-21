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
    db.collection("users").insertMany(
      [
        {
          name: "gogo",
          age: "19",
        },

        {
          name: "lolo",
          age: "20",
        },
        {
          name: "soso",
          age: "21",
        },
        {
          name: "momo",
          age: "21",
        },
      ],

      (error, result) => {
        if (error) {
          return console.log("unable to insert user");
        } else {
          console.log(result.Ops); // D N W
        }
      }
    );

    // add another collection
    db.collection("tasks").insertMany(
      [
        { desecration: "do the first task", completed: true },
        { desecration: "do the second task", completed: false },
        { desecration: "do the thead task", completed: true },
        { desecration: "do the fourth task", completed: true },
      ],
      (error, result) => {
        if (error) {
          return console.log("unable to insert user");
        } else {
          console.log(result.Ops); // D N W
        }
      }
    );
  }
);
