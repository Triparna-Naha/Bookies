import mongoose, { mongo } from "mongoose";
const userSchema = mongoose.Schema({
  fullname:
  {
    type: String,
    required: [true,'fullname is required'],
  },
  email:
  {
    type: String,
    required: true,
    unique: true,
  },
  password:
  {
    type: String,
    required: true,
  },
});
const User = mongoose.model("User", userSchema)
export default User;