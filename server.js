//working code
const express = require('express');
//the below is doing jack
// const mongodb = require('mongodb').MongoClient;
const db = require('./config/connection');
//right now, this is doing Jack.
const User = require('./models/User');

const PORT = process.env.PORT || 3001;
const app = express();

//connect from the connection under config
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

app.use(express.json());


///I was having so much trouble with routing that I went back to earlier lessons just to see some routes work
app.post('/newUser', (req, res) => {
  // Use db connection to add a document
  db.collection('user').insertOne(
    { username: req.body.username, email: req.body.email},
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

//shows things that are added via above post
app.get('/userList', (req, res) => {
  db.collection('user')
    .find({})
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });

//to try and create a new user
app.post('/createUser', (req, res) => {
  const newUser = new User({username: req.body.username, email: req.body.email});
  newUser.save();
  if(newUser){
    res.status(201).json(newUser);
  } else {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ error: 'Something went wrong' });
  }
});

//shows an empty array
  app.get('/lookAtUsers', (req, res) =>{
    User.find({}, (err, result) => {
      if (err) {
        res.status(500).send({ message: 'Internal Server Error' });
      } else {
        res.status(200).json(result);
      }
    });
  });






//--------------- IGNORE BELOW


// //require express and mongodb and the connection from config
// const express = require('express');
// const mongodb = require('mongodb').MongoClient;
// const connection=require('./config/connection')
// const router = require('express').Router();


// const app = express();
// const port = process.env.PORT || 3001;


// // Creates a connection to a MongoDB instance (refer to unit 18 activity 4 for more notes)
// mongodb.connect(connection,
//   (err, client) => {
//     app.listen(port, () => {
//       console.log(`Listening at http://localhost:${port}`);
//     });
//   }
// );

//----------------------

//for some reason I have to use 0.0.0.0 to connect to the local instance of Mongodb; added db name requirement
// let dbName = "socialMedia";
// const connectionStringURI = `mongodb://0.0.0.0:27017/${dbName}`;

//a variable to hold the connection
// let db;
// db = client.db();