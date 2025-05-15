import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import UserRouter from "./routes/user.route.js";
import AuthRouter from "./routes/auth.route.js";
import AdminRouter from "./routes/admin.route.js";
import SongsRouter from "./routes/songs.route.js";
import AlbumRouter from "./routes/album.route.js";
import StatsRouter from "./routes/stats.route.js";
import { clerkMiddleware } from "@clerk/express";
import fileUpload from "express-fileupload";
import path from "path";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(clerkMiddleware());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path,
    createParentPath: true,
    limits: {
      fileSize: 10 * 1024 * 1024, // 10MB  max file size
    },
  })
);

app.use("/api/user", UserRouter);
app.use("/api/auth", AuthRouter);
app.use("/api/admin", AdminRouter);
app.use("/api/songs", SongsRouter);
app.use("/api/albums", AlbumRouter);
app.use("/api/stats", StatsRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res
    .status(400)
    .json({
      message:
        process.env.Node_ENV == "producation"
          ? "Internal Server error"
          : err.message,
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
