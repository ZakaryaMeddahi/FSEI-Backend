const nodemailer = require('nodemailer');

const sendEmail = (credentials) => {
  const { email, password } = credentials;

  const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: process.env.USER,
    to: email,
    subject: 'Registration Credentials',
    html: `<p>Your password is: <strong>${password}</strong></p>`,
  };

  mailTransport.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.error(err);
      res.json({
        status: 'error',
        message: 'Error occurs when trying to send email!',
      });
    } else {
      console.log('Email sent successfully');
      res.json({
        status: 'success',
        message: 'Email sent successfully',
      });
    }
  });
};

module.exports = sendEmail;
