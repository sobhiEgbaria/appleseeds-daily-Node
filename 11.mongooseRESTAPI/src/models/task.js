// responsibility (1. define the task model)

import mongoose from "mongoose";

// ===> tasks module
export const Tasks = mongoose.model("Tasks", {
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
