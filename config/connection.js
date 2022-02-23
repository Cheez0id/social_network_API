const { connect, connection } = require('mongoose');


let dbName = "socialMedia";
const connectionStringURI = `mongodb://0.0.0.0:27017/${dbName}`;

connect(connectionStringURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;