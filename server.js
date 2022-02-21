//require express and mongodb
const express = require('express');
const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;

//for some readon I have to use 0.0.0.0 to connect to the local instance of Mongodb; added db name requirement
let dbName = "socialMedia";
const connectionStringURI = `mongodb://0.0.0.0:27017/${dbName}`;

//a variable to hold the connection
let db;

// Creates a connection to a MongoDB instance and returns the reference to the database (refer to unit 18 activity 4 for more notes)
mongodb.connect(connectionStringURI,  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}`);
    });
  }
);

// Built in Express function that parses incoming requests to JSON
app.use(express.json());