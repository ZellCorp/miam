const express = require('express');
const router = express.Router();
const mongoUtil = require('../utils/mongoUtil.js');
const db = mongoUtil.getDb();
const errorHandler = require('../utils/errorHandler.js');
const collection = db.collection('vote');

router.patch('/today', (req, res) => {
  collection.insertOne({
    'adress': req.body.restaurantAddress,
    'date': 'today'
  }).then(() =>
    res.status(201).json({
      message: 'Your vote for ' + req.body.name + 'was saved succefully.'
    })
  ).catch((err) => errorHandler.customError({
    status: 500,
    error: err
  }, req, res));
});

module.exports = router;
