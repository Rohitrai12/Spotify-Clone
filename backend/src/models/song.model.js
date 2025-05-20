import mongoose from "mongoose";

const songSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    artist: {
      required: true,
      type: String,
    },
    imageURL: {
      required: true,
      type: String,
    },
    audioURL: {
      required: true,
      type: String,
    },
    durationURL: {
      required: true,
      type: String,
    },
    albumId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Album",
      required: false,
    },
  },
  { timestamps: true }
);

const Song = mongoose.models.Song || mongoose.model("Song", songSchema);

export default Song;