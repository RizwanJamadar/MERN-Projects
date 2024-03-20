import nodemailer from "nodemailer";

export const sendMail = async (mail,status,staffName) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, // Port for TLS/STARTTLS
    secure: false, // true for 465, false for other ports
    auth: {
      user: "rizwanjamadar19@student.sfit.ac.in",
      pass: "autypdohyregduam",
    },
  });

  console.log("TRANSPORTER CREATED SUCCESSFULLY");

  // For Approved Request Message 

  const approvedMailOptions = {
    from: "rizwanjamadar19@student.sfit.ac.in",
    to: mail,
    subject: "Leave Request Confirmation from College Administration ✔",
    text: `Dear ${staffName},\n\nYour leave request has been approved. You are granted leave for the requested period.\n\nBest Regards,\n[Your College Name] Leave Management Team`,
    html: `<p>Dear ${staffName},</p><p>Your leave request has been approved. You are granted leave for the requested period.</p><p>Best Regards,<br> SFIT Management Team</p>`,
  };

  // For Rejected Request Message

  const rejectedMailOptions = {
    from: "rizwanjamadar19@student.sfit.ac.in",
    to: mail,
    subject: "Leave Request Decision Notification from College Administration ❌",
    text: `Dear ${staffName},\n\nWe regret to inform you that your leave request has been rejected. Please contact the administration for further clarification.\n\nBest Regards,\n[Your College Name] Leave Management Team`,
    html: `<p>Dear ${staffName},</p><p>We regret to inform you that your leave request has been rejected. Please contact the administration for further clarification.</p><p>Best Regards,<br> SFIT Management Team</p>`,
  };

  const mailOptions = status === "Rejected" ? rejectedMailOptions : approvedMailOptions;

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

sendMail("dhruvi6903@student.sfit.ac.in","Approved","Dhruvi Shah");