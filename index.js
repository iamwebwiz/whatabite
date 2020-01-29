const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || '3000';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.status(200).send('WHATABYTE: Food for Devs!');
});

app.listen(port, () =>
  console.log(`Server started at: http://localhost:${port}`)
);
