const router = require('express').Router();
//reference code from 18/24
// const videoRoutes = require('./videoRoutes');
// const userRoutes = require('./userRoutes');

// router.use('/videos', videoRoutes);
// router.use('/users', userRoutes);


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
