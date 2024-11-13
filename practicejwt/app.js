const cookieParser = require('cookie-parser');
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const app = express();

app.use(cookieParser());
app.get("/", (req, res) =>{
    let token = jwt.sign({email: "gaurav@gmail.com"}, "secret");
    console.log(token);
    res.cookie("token", token)
    res.send("Completed")
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("bhimkishakti", salt, function(err, hash) {
            // Store hash in your password DB.
            console.log(hash);
        });
    });
})

app.get("/read", (req, res) =>{
    let data = jwt.verify(req.cookies.token, "secret")
    console.log(data);
})
app.listen(3000);