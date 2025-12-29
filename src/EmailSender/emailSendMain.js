import transporter from "./em";

const sendEmailService = async (email, subject, message) => {
    transporter.sendMail({
        from: "sharma2828@gmail.com",
        to: email,
        subject: subject,
        text: message
    }, (error, info) => {
        if (error) {
            console.log(error);
            return
        };
        console.log("Mail sent successfully");
    });
}

export default sendEmailService;