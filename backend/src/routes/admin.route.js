import { Router } from "express";
import { protectRoute, requireAdmin } from "../middlewares/auth.middleware.js";
import {createAlbum, createSong, deleteSong} from '../controllers/admin.controller.js'

const AdminRouter = Router()

AdminRouter.post("/", protectRoute, requireAdmin, createSong)
AdminRouter.delete("/songs/:id", protectRoute, requireAdmin, deleteSong)
AdminRouter.post("/album", protectRoute, requireAdmin, createAlbum)

export default AdminRouter