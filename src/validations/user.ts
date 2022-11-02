import { Schema } from "../hooks/schema";

export const user = new Schema({
  name: {
    type: String,
    required: false,
    minLength: 7,
  },
  email: {
    type: String,
    required: true,
    email: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 30,
  },
  isActive: {
    type: Boolean,
    required: false,
    message: "field is not active!",
  },
  hobbies: {
    type: Array,
    required: false,
    minLength: 3,
  },
  gender: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});
