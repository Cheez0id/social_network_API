const router = require('express').Router();
const models = require('../../models')

router.use('/models', models)


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

app.post('/newThought', (req, res) => {
  // Use db connection to add a document
  db.collection('thought').insertOne(
    { thoughtText: req.body.thoughtText, username: req.body.username},
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});


module.exports = router;
