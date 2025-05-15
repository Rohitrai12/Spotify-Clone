import { Router } from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { getAllUsers } from "../controllers/user.controller.js";

const UserRouter = Router()

UserRouter.get("/", protectRoute, getAllUsers)

export default UserRouter