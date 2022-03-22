const sgMail = require('@sendgrid/mail')
require('dotenv').config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY) //your sendgrid api key

const sendMail = (email, name) => {
    sgMail.send({
        to:'toemail@email.com',
        from: 'fromemail@email.com', 
        subject: 'here comes subject line', 
        text: `here comes the body ${name}` 
    })
}


module.exports = {
    sendMail
}