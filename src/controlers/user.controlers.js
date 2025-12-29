import User from "../model/user.model.js";

const getAllUserController = async (req, res) => {
    try {
        const user = await User.find({ active: true });
        res.json({
            status: true,
            user,
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Server error",
            error: error.message,
        });
    }
};
const getUserByIdController = async (req, res) => {
    const user = await User.findById({ active: true, _id: req.params.id });
    res.json({
        user, status: true
    });
}

export { getAllUserController, getUserByIdController }