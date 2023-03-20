const express = require('express');
const nodemailer = require('nodemailer');
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
  const { name, meeting, time, other } = req.body;

  let transporter = nodemailer.createTransport({
    host: 'smtp.elasticemail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'shubhampalatwork@gmail.com',
      pass: '9C83F61AC86D2FCF8F95CD2FACEDB5B79425',
    },
  });

  let info = await transporter.sendMail({
    from: '"PORTFOLIO " <mrdecilionior786@gmail.com>',
    to: "shubhampalatwork@gmail.com",
    subject: "From portfolio",
    text: `
        name : ${name}, 
        meeting/contact : ${meeting}, 
        selectedDateTime : ${time}, 
        other : ${other}`
  });

  console.log('Message sent: %s', info.messageId);
  res.send('Email sent successfully');
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
