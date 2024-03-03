const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = (userEmail, userName) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.FROM_MAIL,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.FROM_MAIL,
    to: userEmail,
    subject: process.env.MAIL_SUBJECT,

    text: `Thanks <b>${userName}</b> for making enquiry at Holiday Heavens. We will make sure that you will get best service. Our executive will reach you out soon, Have a great Day!`,
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
               <p>Dear <b>${userName}</b>,</p>
               <p>Thank you for reaching out to us. We appreciate your interest and value your inquiry.</p>
               <p>A member of our team will review your message and get back to you as soon as possible.</p>
               <p>Should you have any urgent matters, please feel free to contact us directly at <b>+91 9130003737</b>.</p>
               <p>Best regards,<br>Holiday Heavens</p>
           </div>
           <div class="footer">
               <p>This is an automated message. Please do not reply to this email.</p>
           </div>
       </div>
   </body>
   </html>`,
    // html: '<html><head><title>Enquiry Confirmation</title><style>body {font-family: Arial, sans-serif;}.container {width: 80%;margin: auto;padding: 20px;border: 1px solid #ddd;border-radius: 5px;}.header {text-align: center;padding: 10px;background-color: #007BFF;color: white;}.content {margin-top: 20px;}.footer {margin-top: 30px;text-align: center;color: #28a745;}</style></head><body><div class="container"><div class="header"><h1>Holiday Heavens</h1></div><div class="content"><p>Thanks Sanket for making an enquiry at Holiday Heavens. We will make sure that you get the best service. Our executive will reach out to you soon.</p></div><div class="footer"><p>Have a great day!</p></div></div></body></html>',
    // attachments: [
    //   {
    //     filename: "holiday-heavens.png",
    //     path: "D:\\Projects\\holiday-heavens\\holiday-heavens\\backend\\assets\\holiday-heavens-logo.png",
    //     cid: "holidayheavens@logo.ee",
    //   },
    // ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { sendEmail };
