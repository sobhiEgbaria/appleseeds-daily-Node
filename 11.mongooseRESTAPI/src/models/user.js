import mongoose from "mongoose";
import validator from "validator";

// user model collection
export const User = mongoose.model("User", {
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
