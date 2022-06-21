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

    // ===> use findOne to find one user
    db.collection("users").findOne({ name: "gogo" }, (error, res) => {
      if (error) {
        return console.log("unable to fetch data");
      }
      console.log(res);
    });

    //  ===> use findOne to find multiple user by find and toArray
    db.collection("users")
      .find({ age: "21" })
      .toArray((error, res) => {
        if (error) {
          return console.log("unable to fetch data");
        }
        console.log(res);
      });

    //  ===> find the count of users
    db.collection("users")
      .find({ age: "21" })
      .count((error, res) => {
        if (error) {
          return console.log("unable to fetch data");
        }
        console.log(res);
      });

    //  ===> find the true task
    db.collection("tasks")
      .find({
        completed: true,
      })
      .toArray((error, res) => {
        if (error) {
          return console.log("unable to fetch data");
        }
        console.log(res);
      });
  }
);
