const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

// App setup & config
const PORT = process.env.PORT || 5000;
const app = express();

//
// APPLICATION MIDDLEWARE
// ------------------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure cookie-session
const secondInMilli = 1000;
const secondsInMin = 60;
const numberOfMin = 2;
app.use(
  cookieSession({
    name: 'session',
    keys: [/* secret */ 'w@nd3rFul'],
    maxAge: secondInMilli * secondsInMin * numberOfMin, // in milliseconds
  })
);

//
// API ROUTE
// ------------------------------

// Retrieving Cookie
app.get('/api/creature', (req, res) => {
  // req.session
  const creature = req.session.favoriteCreature;
  console.log('GET:', creature);
  res.send({ favoriteCreature: creature });
});

// Saving a Cookie
app.post('/api/creature', (req, res) => {
  const creatureData = req.body;
  console.log('POST:', creatureData);

  // document.cookie = 'key=value' <=> req.session.kittykat = value
  req.session.favoriteCreature = creatureData.favoriteCreature;
  res.sendStatus(201);
});

//
// APP LAUNCH
// ------------------------------

app.listen(PORT, () => {
  console.log('Listening on PORT:', PORT);
});
