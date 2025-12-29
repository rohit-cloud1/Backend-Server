import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    isUsed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    expiresAt: {
        type: Date,
        default: () => new Date(Date.now() + 5 * 60 * 1000)
    }
})

otpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 0 });

otpSchema.pre("save", async function (next) {
    try {
        if (!this.isModified("otp")) return next();
        const salt = await bcrypt.genSalt(10);
        this.otp = await bcrypt.hash(this.otp, salt);
        next();
    } catch (error) {
        console.log(error);
    }
})

const otpModel = mongoose.model("otp", otpSchema);

export default otpModel;