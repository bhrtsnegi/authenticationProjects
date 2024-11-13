const cookieParser = require('cookie-parser');
const express = require('express')

const app = express();

app.use(cookieParser());
app.get("/", (req, res) =>{
    res.cookie("name", "harsh");
    res.send("done");
})

app.get("/read", (req, res) =>{
    console.log(req.cookies);
    res.send("done");
})
app.listen(3000);