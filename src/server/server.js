//init environment params
const express = require('express');
const app = express();
const path = require('path');
var mongoUtil = require( './utils/mongoUtil.js' );

//Init server
var initServer =function (){
  var auth = require('./routes/auth.js');
  var user = require('./routes/user.js');
  app.use('/auth', auth);
  app.use('/user', user);
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
  app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
  });
};

//Open the db connexion then run init on the server (route, controller, ...).
mongoUtil.connectToServer(initServer);
