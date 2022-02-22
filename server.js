//require express and mongodb and the connection from config
const express = require('express');
const mongodb = require('mongodb').MongoClient;
const connection=require('./config/connection')

const app = express();
const port = process.env.PORT || 3001;


// Creates a connection to a MongoDB instance (refer to unit 18 activity 4 for more notes)
mongodb.connect(connection,
  (err, client) => {
    app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}`);
    });
  }
);

app.use(express.json());




//--------------- IGNORE BELOW

//for some reason I have to use 0.0.0.0 to connect to the local instance of Mongodb; added db name requirement
// let dbName = "socialMedia";
// const connectionStringURI = `mongodb://0.0.0.0:27017/${dbName}`;

//a variable to hold the connection
// let db;
// db = client.db();