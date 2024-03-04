const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmailAdmin = (userEmail, userName, userContact, userDestination) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.FROM_MAIL,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const bccEmails = process.env.BCC_MAIL.split(",");

  let mailOptions = {
    from: process.env.FROM_MAIL,
    to: process.env.TO_MAIL,
    bcc: bccEmails,
    subject: process.env.MAIL_SUBJECT,

    text: `Hello Admin, customer with name <b>${userName}</b> has made an enquiry or downloaded the quotation for destination ${userDestination}. Please them on ${userContact} or ${userEmail} Have a great Day!`,
    html: `<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Thank You for Contacting Us</title>
       <style>
           /* Reset CSS */
           body, html {
               margin: 0;
               padding: 0;
               font-family: Arial, sans-serif;
           }
           /* Container styles */
           .container {
               max-width: 600px;
               margin: 0 auto;
               padding: 20px;
           }
           /* Header styles */
           .header {
               text-align: center;
               padding-bottom: 20px;
               border-bottom: 1px solid #ccc;
           }
           /* Logo styles */
           .logo {
               max-width: 200px;
           }
           /* Content styles */
           .content {
               padding: 20px 0;
           }
           /* Footer styles */
           .footer {
               text-align: center;
               padding-top: 20px;
               border-top: 1px solid #ccc;
           }
       </style>
   </head>
   <body>
       <div class="container">
           <div class="header">
               <img src="https://res.cloudinary.com/dcgwmpbmb/image/upload/v1709476971/samples/holiday-heavens/logo/logo.png" alt="Your Company Logo" class="logo">
               <h1>Thank You for Contacting Us</h1>
           </div>
           <div class="content">
               <p>Hello Admin, customer with name <b>${userName}</b> has made an enquiry or downloaded the quotation for destination <b>${userDestination}</b>. Please them on <b>${userContact}</b> or <b>${userEmail}</b>. Have a great Day!</p>
               <p>Best regards,<br>Holiday Heavens</p>
           </div>
           <div class="footer">
               <p>This is an automated message. Please do not reply to this email.</p>
           </div>
       </div>
   </body>
   </html>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { sendEmailAdmin };
