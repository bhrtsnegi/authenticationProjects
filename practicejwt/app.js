const cookieParser = require('cookie-parser');
const express = require('express')
const bcrypt = require('bcrypt')

const app = express();

app.use(cookieParser());
app.get("/", (req, res) =>{
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("bhimkishakti", salt, function(err, hash) {
            // Store hash in your password DB.
            console.log(hash);
        });
    });
})

app.get("/read", (req, res) =>{
    console.log(req.cookies);
    res.send("done");
})
app.listen(3000);