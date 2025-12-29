import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "sharma28248@gmail.com",
        pass: "dtdkwzepkigrrnmn"
    }
})

export default transporter;