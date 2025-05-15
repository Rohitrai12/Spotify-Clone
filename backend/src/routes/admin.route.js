import { Router } from "express";
import { protectRoute, requireAdmin } from "../middlewares/auth.middleware.js";
import {checkAdmin, createAlbum, createSong, deleteAlbum, deleteSong} from '../controllers/admin.controller.js'

const AdminRouter = Router()

AdminRouter.get("/check", checkAdmin)
AdminRouter.post("/", protectRoute, requireAdmin, createSong)
AdminRouter.delete("/songs/:id", protectRoute, requireAdmin, deleteSong)
AdminRouter.post("/album", protectRoute, requireAdmin, createAlbum)
AdminRouter.delete("/album/:id", protectRoute, requireAdmin, deleteAlbum)

export default AdminRouter