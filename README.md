# blog-sendGrid-mail
This project is about sending mail to user on some events like registration, update etc..

# Introduction

Mails are always an important aspect in order to reach out to the customer or stay put with updates,  alerts, greetings or any form of information. @sendgrid/mail library provides an easy way to configure our application to be able to send mail. Today we are going to learn sending mail using the @sendgrid/mail library using Node and express.

Let's start with integrating Sendgrid.

We need to generate an API key by https://sendgrid.com/ and create an account and choose a plan as per your requirement.

# Setup project

Create an app directory using below mentioned command

```bash
mkdir SendgridApp
cd SendgridApp 
```

Initialize Project

```bash
npm init -y 
```

It will create a package.json file.

Now we will install required dependencies in our project using below mentioned command.

```bash
npm i express @sendgrid/mail dotenv
```

Now let's set up the root file of our project and name it as your will.

```bash
App.js
```

```bash
const express = require("express");
require("dotenv").config();
var app = express();
app.use(express.json())
const mailRoute = require('./routes/sendMail')
app.use(mailRoute)
app.listen(process.env.PORT, console.log('Server is up and running '+ process.env.PORT))  
```





