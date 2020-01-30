const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || '3000';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});

app.get('/user', (req, res) => {
  res.render('user', { title: 'Profile', userProfile: { nickname: 'Wiz' } });
});

app.listen(port, () =>
  console.log(`Server started at: http://localhost:${port}`)
);
