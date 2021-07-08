const contact = async (req, res) => {
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
        text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
        
       
       }
    transporter.sendMail(mailData, function(err, success){
        if (err){
            
            res.json({status: "error", message: "Something is wrong with the server please try again later"})
            res.status(200).end()
        }
        else{
            
            res.json({status: 'ok', message:`Hello ${req.body.name}, Your message was send sucessfully.`})
            res.status(401).end()
        }
    })
    
   return res
}

export default contact