import mongoose from "mongoose";
import User from "./user.model.js";

const VideoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    User:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

});

const video = mongoose.model("Video", VideoSchema);

export default video;
