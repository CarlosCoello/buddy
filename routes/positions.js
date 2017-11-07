const Position = require('../models/position');
const config = require('../config/database');
const nodemailer = require('nodemailer');

module.exports = (router) => {

    router.post('/position', (req, res) => {
        position = new Position({
            title: req.body.title,
            description: req.body.description,
            eName: req.body.eName,
            eAddress: req.body.eAddress,
            eCity: req.body.eCity,
            eState: req.body.eState,
            email: req.body.email
        });
        position.save( (err, position ) => {
            if(err){
                res.send({ success: false, message: 'error occures' + err });
            } else {
                res.send({ success: true, position: position });
            }
        });
    });

    // apply to position

    router.post('/applyToPosition', (req,res) => {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const messageText = req.body.message;
        const file = req.body.file;
        const output = `
        <p>You have a new contact request</p>
        <h4>Contact details</h3>
        <ul>
         <li>from: ${firstname} ${lastname}</li>
         <li>email: ${email}</li>
         <li>message: ${messageText}</li>
         </ul>
        `;
    
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "e870de38bb2525",
              pass: "d3892d66b0cd08"
            }
        });
    
        // setup email data with unicode symbols
        let mailOptions = {
            from: `${firstname} <${email}>` , // sender address
            to: 'e962edcdae-4b165f@inbox.mailtrap.io', // list of receivers
            subject: 'Hello from the client', // Subject line
            text: `${messageText}`, // plain text body
            html: output, // html body
            attachments: [
                {   // utf-8 string as an attachment
                    filename: file,
                    content: 'hello world!'
                },
                {
                    // use pregenerated MIME node
                    raw: 'Content-Type: text/plain\r\n' +
                         'Content-Disposition: attachment;\r\n' +
                         '\r\n' +
                         'Hello world!'
                }
            ]
        };
    
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            res.send({ sucess: true, message: 'email sent!' });
    
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });

    return router;
}