const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on the port number ${PORT}`));

//Configuration (MONGODB)
var curl = "mongodb://localhost:27017";
var client = new MongoClient(curl); 

//TESTING
app.get('/klef/test', async function(req, res){
    //res.send("Koneru Lakshmaiah Education Foundation");
    res.json("Koneru Lakshmaiah Education Foundation");
});

app.post('/klef/cse', async function(req, res){
    res.json(req.body);
    //res.json("Computer Science and Engineering");
});

//REGISTRATION MODULE
app.post('/registration/signup', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDP');
        users = db.collection('users');
        data = await users.insertOne(req.body);
        conn.close();
        res.json("Registered successfully...");
    }catch(err)
    {
        res.json(err).status(404);
    }
});
//FORGOT PASSWORD MODULE
app.post('/forgotpassword/pass', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDP');
        users = db.collection('users');
        data = await users.insertOne(req.body);
        conn.close();
        res.json("Password Updated successfully...");
    }catch(err)
    {
        res.json(err).status(404);
    }
});

//LOGIN MODULE
app.post('/login/signin', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDP');
        users = db.collection('users');
        data = await users.count(req.body);
        conn.close();
        res.json(data);
    }catch(err)
    {
        res.json(err).status(404);
    }
});

app.post('/contacts/message', async function(req, res){
    try {
        conn = await client.connect();
        db = conn.db('SDP'); 
        contacts = db.collection('contacts');
        await contacts.insertOne(req.body);
        conn.close();
        res.status(201).json({ message: 'Contact message submitted successfully' });
    } catch(err) {
        console.error('Error submitting contact message:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/home/uname', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDP');
        users = db.collection('users');
        data = await users.find(req.body, {projection:{firstname: true, lastname: true}}).toArray();
        conn.close();
        res.json(data);
    }catch(err)
    {
        res.json(err).status(404);
    }
});

app.post('/registers/submit', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDP');
        voters = db.collection('voters');
        data = await voters.insertOne(req.body);
        conn.close();
        res.json("Voter Registered successfully...");
    }catch(err)
    {
        res.json(err).status(404);
    }
});
app.post('/cp/updatepwd', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDP');
        users = db.collection('users');
        data = await users.updateOne({emailid : req.body.emailid}, {$set : {pwd : req.body.pwd}});
        conn.close();
        res.json("Password has been updated");
    }catch(err)
    {
        res.json(err).status(404);
    }
});

app.post('/myprofile/info', async function (req, res) {
    try {
        const conn = await client.connect();
        const db = conn.db('SDP');
        const users = db.collection('users');
        data = await users.find(req.body, {projection:{firstname: true, lastname: true , emailid:true,contactnumber:true}}).toArray();
        conn.close();
        res.json(data);
    } catch (err) {
        res.json(err).status(404);
    }
});
