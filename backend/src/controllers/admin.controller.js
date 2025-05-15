import {Album} from "../models/album.model.js";
import Song from "../models/song.model.js";
import cloudinary from 'cloudinary'

const uploadToCloudinary = async () =>{
    try {
        const result = await cloudinary.uploader.upload(file.tempFilePath,{
            resource_type:"auto"
        })

        return result.secure_url
    } catch (error) {
        console.log("Error in uploadToCloudinary", error);
        throw new Error("Error in uploadToCloudinary")
    }
}

export const createSong = async (req, res, next) => {
  try {
    if (!req.files || !req.files.audioFile || !req.files.imageFile) {
      return res
        .status(400)
        .json({ success: false, message: "Please upload all files" });
    }

    const { title, artist, albumId, duration } = req.body;
    const audioFile = req.files.audioFile;
    const imageFile = req.files.imageFile;

    const audioURL = await uploadToCloudinary(audioFile)
    const imageURL = await uploadToCloudinary(imageFile)

    const Song = new Song({
      title,
      artist,
      albumId: albumId || null,
      duration,
      audioFile,
      imageFile,
    });
    await Song.save();

    if (albumId) {
      await Album.findByIdAndUpdate(albumId,{
        $push:{songs:song_id},

      })
    }

    res.status(400).json(Song)
  } catch (error) {
    next(error)
    
  }
};
