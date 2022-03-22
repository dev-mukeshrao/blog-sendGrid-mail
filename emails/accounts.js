const sgMail = require('@sendgrid/mail')
require('dotenv').config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendMail = (email, name) => {
    sgMail.send({
        to:email, //receiver email
        from: 'youremail@email.com', //sender email
        subject: 'here comes subject line', // subject of email
        text: `here comes the body ${name}` //body of email
    })
}


module.exports = {
    sendMail
}