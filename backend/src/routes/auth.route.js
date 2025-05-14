import { Router } from "express";
import { callback } from "../controllers/auth.controller.js";

const AuthRouter = Router()

AuthRouter.post("/callback", callback)

export default AuthRouter