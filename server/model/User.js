import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    notes: [
      {
        task: {
          type: String,
        },
        createdAt: {
          type: Date,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("user", UserSchema);
