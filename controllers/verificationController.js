import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  logger: true,
  debug: true,
  auth: {
    user: 'taskplus.squad@gmail.com',
    pass: 'wtqm seou oiyg adxd',
  },
  tls: {
    rejectUnauthorized: true,
  },
});

async function sendVerificationEmail(userEmail, subject, verificationLink) {
  const mailOptions = {
    from: 'taskplus.squad@gmail.com',
    to: userEmail,
    subject: subject,
    html: `
    <p>Please click the following link to verify your email:</p>
    <p><a href="${verificationLink}">Click here</a></p>
  `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
}

function generateVerificationCode() {
  // Implementasi untuk menghasilkan kode verifikasi, misalnya menggunakan angka acak
  return Math.floor(1000 + Math.random() * 9000).toString();
}

export { sendVerificationEmail, generateVerificationCode };
