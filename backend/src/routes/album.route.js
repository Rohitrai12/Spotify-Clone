import { Router } from "express";
import { getAllAlbumById, getAllAlbums } from "../controllers/album.controller.js";

const AlbumRouter = Router()

AlbumRouter.get("/", getAllAlbums)
AlbumRouter.get("/:albumId", getAllAlbumById)

export default AlbumRouter