import { Album } from "../models/album.model.js";
import Song  from "../models/song.model.js";
import User from "../models/user.model.js";

export const getStats = async (req, res, next) => {
	try {

        const [totalSongs, totalusers, totalAlbum, uniqueArtists] = await Promise.all([
            Song.countDocuments(),
            Album.countDocuments(),
            User.countDocuments(),

            Song.aggregate([
                {
                    $unionWith:{
                        call:"album",
                        pipeline:[]
                    }
                },
                {
                    $group:{
                        _id:"$artist"
                    }
                },
                {
                    $cound:{
                        $cound:"count"
                    }
                }
            ])
        ]) 

        res.status(200).json({
            totalAlbum,
            totalSongs,
            totalusers,
            totalArtists: uniqueArtists[0]?.count || 0
        })
	} catch (error) {
		next(error);
	}
};