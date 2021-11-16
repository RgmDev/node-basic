var express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');
const moment = require('moment');

var app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('[:date[iso]] :method ":url" :status :remote-addr :remote-user', {
  stream: fs.createWriteStream(path.join(__dirname, 'app/logs/access_'+moment().format('YYYYMMDD')+'.log'), { flags: 'a' })
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


const usersRoutes = require(path.join(__dirname, 'app/routes/users.js'));
app.use('/api', usersRoutes);

const appRoutes = require(path.join(__dirname, 'app/routes/app.js'));
app.use('/api', appRoutes);


app.listen(port, () => {
  console.log('Listening at http://localhost:'+port);
});