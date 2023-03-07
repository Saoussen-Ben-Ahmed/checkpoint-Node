const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "benahmedsaoussen@gmail.com",
    pass: " ",
  },
});

const mailOptions = {
  from: "benahmedsaoussen@gmail.com",
  to: "saoussen.webixia@gmail.com",
  subject: "Test email",
  text: "This is a test email",
};
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
