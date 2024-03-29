"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(obj) {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
    // insert a real email and password here
    user: '', // 'youremail@gmail.com' generated ethereal user
    pass: '' // 'password' generated ethereal password
    },
    rejectUnauthorized : false
  });

  // send mail with defined transport object

  let info = await transporter.sendMail({
    to: obj.to, // list of receivers
    subject: obj.subject, // subject line
    text: obj.text // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  return info.messageId;
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

// main().catch(console.error);
module.exports = {main}
