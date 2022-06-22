// npm i validator
// npm i mongoose@6.4.0

import { mongoose } from "mongoose";
import validator from "validator";

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

// user model collection
const User = mongoose.model("User", {
  name: { type: String, required: true },
  age: {
    type: Number,
    min: 19,
    validate(value) {
      if (value < 0) {
        throw new Error("the age must be positive");
      }
    },
  },
  Email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("the email not valid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("password cannot contain the word (password)  ");
      }
    },
  },
});

const me = new User({
  name: "sobhi",
  age: 29,
  Email: "gogo@gmail.com",
  password: "asasdasdasdasdas                        ",
});

me.save()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

// ===> tasks module

const Tasks = mongoose.model("Tasks", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const homeWork = new Tasks({
  description: "the first home work   ",
  completed: true,
});

homeWork
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
