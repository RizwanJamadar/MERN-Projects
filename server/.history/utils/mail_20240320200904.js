import nodemailer from "nodemailer";

export const sendMail = async () =>{
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587, // Port for TLS/STARTTLS
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'rizwanjamadar19@student.sfit.ac.in',
          pass: 'gwjfqsazvkfpmayu',
        },
      });
      
      console.log("TRANSPORTER CREATED SUCCESSFULLY");
      
      const mailOptions = {
        from: 'rizwanjamadar19@student.sfit.ac.in',
        to: 'rizwanjamadar19@gmail.com',
        subject: 'Hello ✔',
        text: 'Hello world?',
        html: '<b>Hello world?</b>',
      };
      
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
}

sendMail();