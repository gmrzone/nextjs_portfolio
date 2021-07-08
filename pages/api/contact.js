// const contact = async (req, res) => {
//     let nodemailer = require('nodemailer')
//     const transporter = nodemailer.createTransport({
//         port: 465,
//         host: "smtp.gmail.com",
//         auth: {
//         user: process.env['EMAIL'],
//         pass: process.env['PASSWORD'],
//         },
//         tls: {
//             rejectUnauthorized: false
//         }
//         // secure: true,
//     });
//     const mailData = {
//         from: process.env['EMAIL'],
//         to: process.env['TO_EMAIL'],
//         subject: `Message From ${req.body.name}`,
//         text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
        
       
//        }
//     transporter.sendMail(mailData, function(err, success){
//         if (err){
            
//             res.status(401).json({status: "error", message: "Something is wrong with the server please try again later"})
//         }
//         else{
//             res.status(200).json({status: 'ok', message:`Hello ${req.body.name}, Your message was send sucessfully.`})
//         }
//     })
    
// }

// export default contact

const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');

const contact = async (req, res) => {
    const transport = nodemailer.createTransport(
        nodemailerSendgrid({
            apiKey: process.env['SEND_GRID_API_KEY']
        })
    );
    const mailData = {
        from: process.env['EMAIL'],
        to: process.env['TO_EMAIL'],
        subject: `Message From ${req.body.name}`,
        text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
        
       
       }
       transport.sendMail(mailData, (error, success) => {
            if (error){
                
                res.status(401).json({status: "error", message: "Something is wrong with the server please try again later"})
            }
            else{
                res.status(200).json({status: 'ok', message:`Hello ${req.body.name}, Your message was send sucessfully.`})
            }
        });
    
}

export default contact
