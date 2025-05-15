import { Router } from "express";
import { protectRoute, requireAdmin } from "../middlewares/auth.middleware.js";
import {createSong, deleteSong} from '../controllers/admin.controller.js'

const AdminRouter = Router()

AdminRouter.post("/", protectRoute, requireAdmin, createSong)
AdminRouter.delete("/songs/:id", protectRoute, requireAdmin, deleteSong)

export default AdminRouter