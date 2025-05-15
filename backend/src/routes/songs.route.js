import { Router } from "express";
import { getAllSong, getFeaturedSongs, getTrendingSongs, getMadeForYouSongs } from "../controllers/songs.controller.js";
import { protectRoute, requireAdmin } from "../middlewares/auth.middleware.js";

const SongsRouter = Router()

SongsRouter.get("/getAllSongs", protectRoute, requireAdmin, getAllSong)
SongsRouter.get("/featured", getFeaturedSongs)
SongsRouter.get("/made-for-you", getMadeForYouSongs)
SongsRouter.get("/trending", getTrendingSongs)

export default SongsRouter