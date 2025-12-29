import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";
import User from "../model/user.model.js";
import sendEmailService from "../emailservice/sendEmail.js";

const loginFuncController = async (req, res) => {
    try {
        console.log(req?.body?.email)
        console.log(req?.body?.password)
        const user = await User.findOne({ email: req.body.email });
        console.log(user)
        if (!user) {
            return res.json({ "message": "your not a user", user }).status(400);
        }
        const isValid = await bcrypt.compare(req?.body?.password, user?.password);
        if (!isValid) return res.json({ "error": "password incorrect" });
        const token = await jwt.sign({
            "name": user.name,
            "_id": user._id,
            "email": user.email,

        }, process.env.JWT_SECRET);
        try {
            await sendEmailService(user.email, "Login Successfully",`Hello ${user.name} , you have successfully logged in`)
        } catch (error) {
            console.log(error);
        }
        return res.json({ token })
    } catch (error) {
        console.log(error);
        return res.json({ "error": "internal server error" }).status(500)
    }
}


const registerFunc = async (req, res) => {
    console.log(req.body)
    const user = await User.create(req.body);
    console.log(req.body)

    res.json({
        "message": "Data Posted successfully"
    });

}

export { loginFuncController, registerFunc }