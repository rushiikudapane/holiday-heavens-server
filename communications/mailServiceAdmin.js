require("dotenv").config();

const ElasticEmail = require("@elasticemail/elasticemail-client");
const client = ElasticEmail.ApiClient.instance;
const apikey = client.authentications["apikey"];
apikey.apiKey = process.env.ELASTIC_EMAIL_API_KEY;
const emailsApi = new ElasticEmail.EmailsApi();

const sendEmailAdmin = async (
  userEmail,
  userName,
  userContact,
  userDestination
) => {
  const htmlTitle = `Hello Admin, customer with name <b>${userName}</b> has made an enquiry or downloaded the quotation for destination ${userDestination}. Please them on ${userContact} or ${userEmail} Have a great Day!`;
  const htmlContent = `<!DOCTYPE html>
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
               <h1>Hello Admin, someone just made an enquiry.</h1>
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
   </html>`;

  const emailData = {
    Recipients: {
      To: [process.env.TO_MAIL, process.env.SUPPORT_MAIL],
    },
    Content: {
      Body: [
        {
          ContentType: "HTML",
          Charset: "utf-8",
          Content: htmlContent,
        },
        {
          ContentType: "PlainText",
          Charset: "utf-8",
          Content: "Mail content plintext.",
        },
      ],
      From: process.env.SUPPORT_MAIL,
      Subject: "Holiday Heavens Notification!!!",
    },
  };

  const callback = (error, data, response) => {
    if (error) {
      console.error(error);
      // res.status(200).json({success:error});
    } else {
      console.log("Data: ", data, " Response: ", response);
      console.log("API called successfully.");
      console.log("Email sent.");
      //res.status(200).json({success:"done"});
    }
  };

  emailsApi.emailsTransactionalPost(emailData, callback);
};

module.exports = { sendEmailAdmin };
