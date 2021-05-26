const express = require('express');
const nodemailer = require('nodemailer');

let link =
  '/https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4Pelh79UGncBKPm0IdxFWTvGk1tCATSC98zkgtkdioGez2XobSGGwl5MBXdM2_r4S3K18Aq6u4oP2a7hz6M1wJzBOS-jw';

const app = express();

let transporter = nodemailer.createTransport({
  //   host: 'smtp.mailtrap.io',
  service: 'gmail',
  tls: { rejectUnauthorized: false },
  //   port: 465,
  //   secure: false,
  auth: {
    user: 'peldrige8@gmail.com',
    pass: 'kendrick7',
  },
});
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages', success);
  }
});

let mailOptions = {
  from: '"Example Team" <Jongleur.com>',
  to: 'leroyroy033@gmail.com',
  subject: 'Nice Nodemailer test',
  text: 'Hey there, it’s our first message sent with Nodemailer ;) ',
  html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer',
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    return console.log(err);
  }
  console.log('Message sent', info.messageId);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log('App running on port', PORT);
});
