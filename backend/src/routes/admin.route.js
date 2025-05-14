import { Router } from "express";
import { callback } from "../controllers/auth.controller.js";

const AdminRouter = Router()

AdminRouter.post("/callback", callback)

export default AdminRouter