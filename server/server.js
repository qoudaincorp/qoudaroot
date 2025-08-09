const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { to, subject, data } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "", // Enter the email
      pass: "", // Enter the gmail password/gmail app password
    },
  });

  const htmlBody =
    "<b>First Name:</b> " +
    data.first_name +
    "<br/>" +
    "<b>Last Name:</b> " +
    data.last_name +
    "<br/>" +
    "<b>Email:</b> " +
    data.email +
    "<br/>" +
    "<b>Zip code:</b> " +
    data.zip_code +
    "<br/>" +
    "<b>Address:</b> " +
    data.address +
    "<br/>" +
    "<b>City:</b> " +
    data.city +
    "<br/>" +
    "<b>Message:</b> " +
    data.message +
    "<br/>";

  // Add the same email to both `from` and `to`
  const mailOptions = {
    from: "", // Enter the email here to
    to: "", // Enter the email here to
    subject: subject,
    html: htmlBody,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email: " + error);
    res.status(500).json({ error: "Error sending email" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
