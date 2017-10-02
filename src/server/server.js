//init environment params
const express = require('express');
const app = express();
const path = require('path');
const mongoUtil = require('./utils/mongoUtil.js');
//Init server
var initServer = () => {
  const auth = require('./routes/auth.js');
  const user = require('./routes/user.js');
  const restaurants = require('./routes/restaurants.js');
  const votes = require('./routes/votes.js');
  const bodyParser = require('body-parser');
  const errorHandler = require('./utils/errorHandler.js');

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({
    extended: false
  }));

  // parse application/json
  app.use(bodyParser.json());

  app.use(bodyParser.text()); //TODO: remove the reference if useless.
  app.use('/auth', auth);
  app.use('/user', user);
  app.use('/api/restaurants', restaurants);
  app.use('/api/votes', votes);
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
  app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });
  app.use(errorHandler.genericError);
};

//Connect to mongoDB then initialize the server (route, controller, ...).
mongoUtil.connectToServer.then(initServer).catch(err => console.log(err));
