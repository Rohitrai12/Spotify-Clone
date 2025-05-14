import { Router } from "express";
import { protectRoute, requireAdmin } from "../middlewares/auth.middleware.js";
import {createSong} from '../controllers/admin.controller.js'

const AdminRouter = Router()

AdminRouter.get("/", protectRoute, requireAdmin, createSong)

export default AdminRouter