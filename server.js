//working code
const express = require('express');
const mongodb = require('mongodb').MongoClient;
const db = require('./config/connection');
// const newUser = require('./models/User');

const app = express();
const PORT = 3001;

// const connectionStringURI = `mongodb://0.0.0.0:27017/socialMediaDB`;



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

app.get('/userList', (req, res) => {
  db.collection('user')
    .find({})
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
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