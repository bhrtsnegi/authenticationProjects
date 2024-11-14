const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/posts');

app.get('/', (req, res)=>{
    res.send("Working fine");
})

app.get('/create', async (req, res)=>{
    let user = await userModel.create({
        username: "gaurav",
        age: 25,
        email: "gaurav@gmail.com"
    });

    res.send(user);
})

app.get('/post', async (req, res)=>{
    let post = await postModel.create({
        postData: "Hello this is my post",
        user: "6735ff939641616c927a6795"
    })

    let user = await userModel.findOne({_id: "6735ff939641616c927a6795"});
    user.posts.push(post._id);
    await user.save();

    res.send({post, user});
})
app.listen(3000);