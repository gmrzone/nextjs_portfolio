const contact = async (req, res) => {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
        user: process.env['EMAIL'],
        pass: process.env['PASSWORD'],
        },
        tls: {
            rejectUnauthorized: false
        }
        // secure: true,
    });
    const mailData = {
        from: process.env['EMAIL'],
        to: process.env['TO_EMAIL'],
        subject: `Message From ${req.body.name}`,
        text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
        
       
       }
    transporter.sendMail(mailData, function(err, success){
        if (err){
            
            res.status(401).json({status: "error", message: "Something is wrong with the server please try again later"})
        }
        else{
            res.status(200).json({status: 'ok', message:`Hello ${req.body.name}, Your message was send sucessfully.`})
        }
    })
    
}

export default contact


// 149786971691-ktm4609tqajv66ntbfqnjj5trp5ec42u.apps.googleusercontent.com

// rgLaWQa-bKCooMgTFcXlwHnG