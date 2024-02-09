const express = require('express');
const auth = require('./auth.js');
const PORT = 3001;

const app = express();
app.use(express.json());


app.post('/signup',function(req,res){
    data = {
        "username":req.body.username,
        "password":req.body.password
    }
    token = auth.GetToken(data);
    res.cookie('uid',token);
    res.json({'msg':'Done'});
})


app.post('/login',function(req,res){
    data = {
        "username":req.body.username,
        "password":req.body.password
    }
    token = auth.GetToken(data);
    res.json({'msg':token})
})


app.use(auth.VerifyUserMiddleWare);

app.get('/',function(req,res){
    res.json({'msg':'Done'});
})

app.get('/cookie',function(req,res){
    res.json({'msg':'Cookie'});
})
app.listen(PORT);