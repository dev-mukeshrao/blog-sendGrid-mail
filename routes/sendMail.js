const express = require('express')
const { append } = require('express/lib/response')
const { sendMail } = require('../emails/accounts')
const statusCode = require('../constants/constants')

const router = new express.Router()

router.get('/sendmail', (req, res) => {

    try {
        sendMail('toemail@email.com','name')
        res.status(statusCode.ok).send({message: 'Mail Sent'})
    } catch (error) {
        res.status(statusCode.internalServerError).send({error})
    }

})

module.exports = router