import Video from "../model/VideoModel.js";

const GetAllVideo = async (req, res) => {
    try {
        const video= await Video.find();
        res.json({
            video
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Server error",
            error: error.message,
        });
    }
};


const VideoUpload = async (req, res) => {
    console.log(req.body)
    const video = await Video.create(req.body);
    res.json({
        "message": "Data Posted successfully"
    });
}


export {VideoUpload , GetAllVideo};