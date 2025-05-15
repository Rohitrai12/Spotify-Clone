import User from '../models/user.model.js'
export const getAllUsers = async (req,res,next)=>{
    try {
        const currectUserId = req.auth.userId
        const users = User.find({clerckId:{$ne:currectUserId}})
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}