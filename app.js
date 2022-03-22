const express = require("express");
require("dotenv").config();

var app = express();
app.use(express.json())
const mailRoute = require('./routes/sendMail')

app.use(mailRoute)

app.listen(process.env.PORT, console.log('Server is up and running '+ process.env.PORT))    

