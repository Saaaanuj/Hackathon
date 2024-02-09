const express = require('express');
const auth = require('./controller.js');
const PORT = 3001;
const path = '';
const app = express();
const change_requests_limit = 50;
change_requests = 0;
app.use(express.json());

//isPass =checks if both username and password exist,isUser=checks username exist
//returns true false


app.post('/signup',function(req,res){
    data = {
        "name":req.body.name,
        "username":req.body.username,
        "password":req.body.password,
        "hostel":req.body.hostel
    }
    auth.add(data)
    res.json({'msg':'Succesfully Signed up'});
})


app.post('/login',function(req,res){
    data = {
        "username":req.body.username,
        "password":req.body.password
    }
    if(auth.isPass(data)) {
        res.json({'msg':"Succesfully Logged in"});
    }
    else res.json({"msg":"Account does not exist"})
})


app.get('/',function(req,res){
    res.sendFile(path);
})


app.get('/messmenu',function(req,res){
    data = MenuData();
    res.json(data);
})

app.post('/eatfood',function(req,res){
    data = {
        "username": req.body.username,
        "eatfood": req.body.eatfood  
    }
    if(auth.isUser(data))
    {
        SendData(data);
        res.json({'msg':'succesful'});    
    }
    res.json({'msg':'Not a User'});
})

app.post("/changemessmenu",function(req,res){
    data = {"username":req.body.username};
    if(auth.isUser(data))
    {
        change_requests++;
        console.log(change_requests);
        if(change_requests==change_requests_limit)
        {
            change_requests = 0;
            SendMenuRequest();
        }
        res.json({"msg":"Done"});
    }
    else
    {
        res.json({"msg":"Not a user"});
    }
})

app.listen(PORT);