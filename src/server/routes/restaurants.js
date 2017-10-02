const express = require('express');
const router = express.Router();
const mongoUtil = require('../utils/mongoUtil.js');
const db = mongoUtil.getDb();
const collection = db.collection('restaurant');

router.get('', (req, res) => {
  console.log('coucou');
  collection.find().toArray().then((result) =>
    res.status(200).json(result)
  ).catch((err) => errorHandler.customError({
    status: 500,
    error: err
  }, req, res));
});

router.post('', (req, res) => {
  collection.insertOne(req.body).then((result) =>
    res.status(201).json(result)
  ).catch((err) => errorHandler.customError({
    status: 500,
    error: err
  }, req, res));
});

module.exports = router;
