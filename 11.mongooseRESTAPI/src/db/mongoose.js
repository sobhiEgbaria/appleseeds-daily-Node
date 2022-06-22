// npm i validator
// npm i mongoose@6.4.0

import { mongoose } from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

// ====> add user to database and save ( create new instances )

// const me = new User({
//   name: "sobhi",
//   age: 29,
//   Email: "gogo@gmail.com",
//   password: "asasdasdasdasdas",
// });

// me.save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ====> add task to database and save ( create new instances )

// const homeWork = new Tasks({
//   description: "the first home work   ",
//   completed: true,
// });

// homeWork
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
