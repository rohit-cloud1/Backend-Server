import mongoose from "mongoose";
import User from "../model/user.model.js";

const updateProfileController = async (req, res) => {
    try {
        console.log(req.body);
        await User.updateOne(
            { _id: new mongoose.Types.ObjectId(req.params.id) },
            { $set: { ...req.body } }
        );

        res.json({
            message: "Data Updated Successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred while updating data",
            error: error.message
        });
    }
}

const deleteProfileController = async (req, res) => {
    const user = await User.updateOne({ _id: req.params.id }, { active: false });
    console.log(req.body);
    res.json({
        "message": "Data Deleted successfully"
    });
}

export { updateProfileController, deleteProfileController };