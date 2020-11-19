const express = require('express');
const bodyParser = require('body-parser');

// App setup & config
const PORT = process.env.PORT || 5000;
const app = express();

//
// APPLICATION MIDDLEWARE
// ------------------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//
// API ROUTE
// ------------------------------

app.get('/api/creature', (req, res) => {
  res.send({ favoriteCreature: '' });
});

app.post('/api/creature', (req, res) => {
  res.sendStatus(201);
});

//
// APP LAUNCH
// ------------------------------

app.listen(PORT, () => {
  console.log('Listening on PORT:', PORT);
});
