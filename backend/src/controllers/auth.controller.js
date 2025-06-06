import User from '../models/user.model.js'
export const callback = async (req,res, next)=>{
    try {
        const {id, firstName, lastName, imageUrl} = req.body

       const user = await user.findOne({clerckId:id});

       if(!user){
        await User.create({
            clerkId:id,
            fullName:`${firstName} ${lastName}`,
            imageUrl
        })
       }

       res.status(200).json({success:true})
    } catch (error) {
      next(error)        
    }
}
