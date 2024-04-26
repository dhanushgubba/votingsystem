const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on the port number ${PORT}`));
function authentication(req, res, next)
{
    var authHeader = req.headers.authorization;
    if(!authHeader)
        return res.json("Unauthorized access").status(401);

    var auth = new Buffer.from(authHeader.split(' ')[1],'base64').toString().split(':');
    var username = auth[0];
    var password = auth[1];
    if(username==='admin' && password==='123456')
        next();
    else
        return res.json("Unauthorized access").status(401);
}

app.use(authentication);


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
app.post('/contacts/submit', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDP');
        message = db.collection('message');
        data = await message.insertOne(req.body);
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
        conn.close();
        res.json("Password has been updated");
    }catch(err)
    {
        res.json(err).status(404);
    }
});

/*app.post('/myprofile/info', async function (req, res) {
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
});*/
app.post('/home/menu', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDP');
        menu = db.collection('menu');
        data = await menu.find({}).sort({mid:1}).toArray();
        conn.close();
        res.json(data);
    }catch(err)
    {
        res.json(err).status(404);
    }
});

app.post('/home/menus', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDP');
        menus = db.collection('menus');
        data = await menus.find(req.body).sort({smid:1}).toArray();
        conn.close();
        res.json(data);
    }catch(err)
    {
        res.json(err).status(404);
    }
});

app.post('/vote/submit', async function(req, res){
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

app.post('/candidate/submit', async function(req,res){
    try{
        conn = await client.connect();
        db = conn.db('SDP');
        candidate = db.collection('candidate');
        data = await candidate.insertOne(req.body);
        conn.close();
        res.json("Candidate Verification Successfully...");
    }catch(err)
    {
        res.json(err).status(404);
    }
})

app.post('/voting/vote', async function(req, res) {
    try {
        // Check if the user has already voted
        conn = await client.connect();
        db = conn.db('SDP');
        votedUsers = db.collection('votedUsers');
        const alreadyVoted = await votedUsers.findOne({ emailid: req.body.emailid });

        if (alreadyVoted) {
            // User has already voted, return an error
            res.status(400).json("You have already voted.");
            return;
        }

        // User has not voted yet, proceed with voting
        candidate = db.collection('candidate');
        data = await candidate.insertOne(req.body);

        // Add the user to the list of voted users
        await votedUsers.insertOne({ emailid: req.body.emailid });

        conn.close();
        res.json("Candidate Verification Successfully...");
    } catch (err) {
        res.status(500).json(err);
    }
});


//--ADMIN MODULE

//REGISTRATION MODULE
app.post('/aregistration/signup', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDP');
        users = db.collection('ausers');
        data = await users.insertOne(req.body);
        conn.close();
        res.json("Registered successfully...");
    }catch(err)
    {
        res.json(err).status(404);
    }
});
//LOGIN MODULE
app.post('/admin/signin', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDP');
        users = db.collection('ausers');
        data = await users.count(req.body);
        conn.close();
        res.json(data);
    }catch(err)
    {
        res.json(err).status(404);
    }
});
app.post('/candidates/add', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('SDP');
        users = db.collection('candidates');
        data = await users.insertOne(req.body);
        conn.close();
        res.json("Added successfully...");
    }catch(err)
    {
        res.json(err).status(404);
    }
});



