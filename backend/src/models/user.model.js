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
}, {
  timestamps: true, // ✅ This adds createdAt and updatedAt fields
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
