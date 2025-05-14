import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import UserRouter from './routes/user.route.js'
import AuthRouter from './routes/auth.route.js'
import AdminRouter from './routes/admin.route.js'
import SongsRouter from './routes/songs.route.js'
import AlbumRouter from './routes/album.route.js'
import StatsRouter from './routes/stats.route.js'
dotenv.config()
const app = express()

const PORT = process.env.PORT || 5000

connectDB()

app.use(express.json())

app.use("/api/user", UserRouter)
app.use("/api/auth", AuthRouter)
app.use("/api/admin", AdminRouter)
app.use("/api/songs", SongsRouter)
app.use("/api/albums", AlbumRouter)
app.use("/api/stats", StatsRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})