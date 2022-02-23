const router = require('express').Router();
const User = require('../../models/User');

router.use('/models', models);


//from earlier activities: see video from 2/14
// router.post('/newUser', (req, res) => {
//   // Use db connection to add a document
//   db.collection('user').insertOne(
//     { username: req.body.username, email: req.body.email},
//     (err, results) => {
//       if (err) throw err;
//       res.json(results);
//     }
//   );
// });

//POST placeholder for thought
// app.post('/newThought', (req, res) => {
//   // Use db connection to add a document
//   db.collection('thought').insertOne(
//     { thoughtText: req.body.thoughtText, username: req.body.username},
//     (err, results) => {
//       if (err) throw err;
//       res.json(results);
//     }
//   );
// });


// router.post("/newUser", async (req, res) => { 
//   console.log('yoooooooooooo ',req.body);
// 	User.create({
// 		username: req.body.username,
// 		email: req.body.email,
// 		}).then((newUser) => {
// 		console.log("making a new user");
//     res.status(200).send('a new user was created')
// 	});
// });


// router.post('/newUser', (req, res)) => {
//   User.create({
//     username: req.body.username, email: req.body.email},
//     (err, results) => {
//       if (err) throw err;
//       res.json(results);
//     }
//   )
// }


module.exports = router;
