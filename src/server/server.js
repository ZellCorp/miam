//init environment params
const express = require('express');
const app = express();
const path = require('path');
const mongoUtil = require('./utils/mongoUtil.js');

//Init server
var initServer = () => {
  const auth = require('./routes/auth.js');
  const user = require('./routes/user.js');
  const api = require('./routes/api.js');
  app.use('/auth', auth);
  app.use('/user', user);
  app.use('/api', api);
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
  app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });
};

//Connect to mongoDB then initialize the server (route, controller, ...).
mongoUtil.connectToServer.then(initServer).catch(err => console.log(err));
