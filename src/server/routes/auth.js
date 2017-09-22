const express = require('express');
const router = express.Router();
var mongoUtil = require('../utils/mongoUtil.js');
var db = mongoUtil.getDb();

router.get('/login', (req, res) => {
  console.log(db);
  res.send('banane');
});

module.exports = router;
