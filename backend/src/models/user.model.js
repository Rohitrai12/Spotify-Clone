import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    required: true,
    type: String,
  },
  imageUrl: {
    required: true,
    type: String,
  },
  clerkId: {
    required: true,
    type: String,
    unique: true,
  },
}, {timeseries:true});

const User = mongoose.model("user", userSchema)

export default User