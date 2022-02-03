var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
    host: "edgedevinteractive.com",
    port: 465,
    secure: true,
    auth: {
        user: "info@edgedevinteractive.com",
        pass: "LupusSeiza46",
    },
});
class Mail{
    sendEmail = ({receiverEmail, subject, text}) => {
        transporter.sendMail({
            sender: "info@edgedevinteractive.com",
            from: "\"EDGE Dev Interactive\" <info@edgedevinteractive.com>",
            to: String(receiverEmail),
            subject: String(subject),
            text: String(text),
        }, (errx, infor) => {
            if(errx){throw errx}
            console.log(infor);

            
        
            transporter.sendMail({
                sender: "info@edgedevinteractive.com",
                from: "\"EDGE Dev Interactive\" <info@edgedevinteractive.com>",
                to: "\"EDGE Dev Interactive\" <info@edgedevinteractive.com>",
                subject: "[COPY] "+subject,
                text: [
                    `[Receiver: ${receiverEmail}]`,
                    "[Content:]",
                    text
                ].join("\n"),
            }, (errx, infor) => {
                if(errx){console.log("ERROR ON SEND COPY MAIL!");throw errx}
                console.log(`[Copy:]\n${infor}`);
            });
        });
    };
    sendTestMail = (receiverEmail) => {
        this.sendEmail({
            receiverEmail: receiverEmail,
            subject: "Test Email Send",
            text: "Hello, You Recived A Test Email!",
        })
    }
    
}



module.exports = Mail;