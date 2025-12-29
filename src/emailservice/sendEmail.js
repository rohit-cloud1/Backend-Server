import transporter from "./emailServiceMain.js";

const sendEmailService = async(email , subject , message )=>{
    transporter.sendMail({
        from : "",
        to : email ,
        subject : subject,
        text : message 
    },(error , info)=>{
        if (error) {
            console.log(error);
            return
        };
        console.log("Mail sent successfully");
    });
}

export default sendEmailService;