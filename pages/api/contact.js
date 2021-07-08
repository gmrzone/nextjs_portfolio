const contact = (req, res) => {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 587,
        // host: "smtp.gmail.com",
        service: "gmail",
        auth: {
        user: process.env['EMAIL'],
        pass: process.env['PASSWORD'],
        },
        // tls: {
        //     rejectUnauthorized: false
        // }
        secure: true,
    });
    const mailData = {
        from: process.env['EMAIL'],
        to: process.env['TO_EMAIL'],
        subject: `Message From ${req.body.name}`,
        text: req.body.message,
       
       }
    transporter.sendMail(mailData, function(err, success){
        if (err){
            
            res.json({status: "Error", message: "Something is wrong with the server please try again later"})
        }
        else{
            
            res.json({status: `Hello ${req.body.name}, Your message was send sucessfully.`})
        }
    })
    
   return res
}

export default contact