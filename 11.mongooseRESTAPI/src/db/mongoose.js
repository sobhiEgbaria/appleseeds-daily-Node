// npm i validator
// npm i mongoose@6.4.0
// responsibility (1. connect to the database)

import { mongoose } from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");
