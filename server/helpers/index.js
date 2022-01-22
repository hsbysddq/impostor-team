const nodemailer = require('nodemailer');

const { USER, PASS } = process.env;

exports.kirimEmail = (dataEmail) => {
  console.log(dataEmail);
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // upgrade later with STARTTLS
    requireTLS: true,
    auth: {
      user: USER,
      pass: PASS,
    },
  });
  return transporter
    .sendMail(dataEmail)
    .then((info) => console.log('Email terkirim:', info.messageId))
    .catch((err) => console.log('Terjadi kesalahan:', err));
};
