const generateBody = require("./otpBody");
const { default: sendEmailService } = require("../EmailSender/emailSendMain");
const { default: otpModel } = require("../model/OtpModel");
const { default: User } = require("../model/user.model");

const sendOTPService = async (email) => {
  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const body = generateBody(otp);
    await otpModel.updateMany({ email }, { $set: { used: true } });
    await sendEmailService(email, `Your CodeWithRohit code is ${otp}`, body);
    await otpModel.create({ email, otp });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const verifyOTPService = async (email, otp) => {
  try {
    const otp_obj = await otpModel.findOne({ email, used: false }).sort({ createdAt: -1 });
    if (!otp_obj) {
      return { status: false, message: "Invalid Otp" };
    }

    const isValid = await otp_obj.compareOtp(otp);
    if (isValid) {
      await User.updateOne({ email }, { $set: { isActive: true } });
      const user_obj = await User.findOne({ email, isActive: true });
      const result = user_obj.toObject();
      return { status: true, message: "Email Verified Successfully", user: result };
    }

    return { status: false, message: "Invalid Otp" };
  } catch (error) {
    console.log(error);
    return { status: false, message: "Something went wrong" };
  }
};

module.exports = { sendOTPService, verifyOTPService };
