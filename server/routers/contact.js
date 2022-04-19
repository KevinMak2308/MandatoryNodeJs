import nodemailer from "nodemailer";
import { Router } from "express";


const router = Router();

router.post("/contact", (req, res) => {
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
         auth: {
            user: 'grunt2308@gmail.com',
            pass: 'Kevin2308grunt'
        }
    });

const mailOptions = {
  from: 'grunt2308@gmail.com',
  to: 'grunt2308@gmail.com',
  subject: 'Sign Up',
  text: 'Welcome to Mandatory II'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

res.status(200).json({ message: "Email Sent Succesfully" });

});

export default router;

