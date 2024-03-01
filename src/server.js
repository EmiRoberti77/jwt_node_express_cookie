const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const loginRoute = require('./routes/login');
const addRoute = require('./routes/add');
const port = 8000;
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

loginRoute(app);
addRoute(app);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/welcome', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/welcome.html'));
});

app.listen(port, () => {
  console.info('started', port, new Date().toISOString());
});
