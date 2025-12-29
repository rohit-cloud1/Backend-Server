import Ecom from "../model/productModel.js";

const getProductController = async (req, res) => {
    try {
        const ecom = await Ecom.find({ user: req.user._id });
        return res.json(ecom)
    } catch (error) {
        console.log(error);
        res.status(500).json({ "message": "Error fetching product" })
    }
}


const postProductController = async (req, res) => {
    try {
        const ecom = await Ecom.create({ ...req.body, user: req.user._id });
        return res.json({ "message ": "Product created successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ "message": "Error fetching product" })
    }
}

export { getProductController, postProductController };