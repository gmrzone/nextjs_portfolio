
const mail = require('@sendgrid/mail');
mail.setApiKey(process.env['SEND_GRID_API_KEY'])


const contact = (req,res) => {
    const msg = {
        to: process.env['TO_EMAIL'],
        from: process.env['EMAIL'], // Use the email address or domain you verified above
        subject: `Message by ${req.body.name}`,
        text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
        html: `<strong>Name: ${req.body.name}</strong> <br>
               <strong>Email: ${req.body.email}</strong> <br>
               <strong>Message: ${req.body.message}</strong><br>`,
               
      };
      mail.send(msg)
      .then(() => {
        res.status(200).json({status: 'ok', message:`Hello ${req.body.name}, Your message was send sucessfully.`})
      })
      .catch(e => {
        res.status(403).json({status: 'error', message:"There was a problem with the server. Please try again later."})
      })
      
}

export default contact



// const nodemailer = require('nodemailer');
// const nodemailerSendgrid = require('nodemailer-sendgrid');

// const contact = async (req, res) => {
//     const transport = nodemailer.createTransport(
//         nodemailerSendgrid({
//             apiKey: process.env['SEND_GRID_API_KEY']
//         })
//     );
//     const mailData = {
//         from: process.env['EMAIL'],
//         to: process.env['TO_EMAIL'],
//         subject: `Message From ${req.body.name}`,
//         text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
        
       
//        }
//        transport.sendMail(mailData, (error, success) => {
//             if (error){
                
//                 res.status(401).json({status: "error", message: "Something is wrong with the server please try again later"})
//             }
//             else{
//                 res.status(200).json({status: 'ok', message:`Hello ${req.body.name}, Your message was send sucessfully.`})
//             }
//         });
    
// }

// export default contact