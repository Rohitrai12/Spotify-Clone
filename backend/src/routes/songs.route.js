import { Router } from "express";
import { getAllSong, getFeaturedSongs } from "../controllers/songs.controller.js";
import { protectRoute, requireAdmin } from "../middlewares/auth.middleware.js";

const SongsRouter = Router()

SongsRouter.get("/getAllSongs", protectRoute, requireAdmin, getAllSong)
SongsRouter.get("/featured", getFeaturedSongs)


export default SongsRouter