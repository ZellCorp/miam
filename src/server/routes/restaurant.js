const express = require('express');
const router = express.Router();
var mongoUtil = require('../utils/mongoUtil.js');
var db = mongoUtil.getDb();

router.get('', (req, res) => {
  console.log('coucou');
  res.send([{
      id: 1,
      name: 'kintaro2',
      description: 'kintaro2',
      lastSelection: 'kintaro2'
    },
    {
      id: 2,
      name: 'kintaro',
      description: 'kintaro1',
      lastSelection: 'kintaro1'
    }, {
      id: 1,
      name: 'kintaro2',
      description: 'kintaro2',
      lastSelection: 'kintaro2'
    },
    {
      id: 2,
      name: 'kintaro',
      description: 'kintaro1',
      lastSelection: 'kintaro1'
    }, {
      id: 1,
      name: 'kintaro2',
      description: 'kintaro2',
      lastSelection: 'kintaro2'
    },
    {
      id: 2,
      name: 'kintaro',
      description: 'kintaro1',
      lastSelection: 'kintaro1'
    }, {
      id: 1,
      name: 'kintaro2',
      description: 'kintaro2',
      lastSelection: 'kintaro2'
    },
    {
      id: 2,
      name: 'kintaro',
      description: 'kintaro1',
      lastSelection: 'kintaro1'
    }, {
      id: 1,
      name: 'kintaro2',
      description: 'kintaro2',
      lastSelection: 'kintaro2'
    },
    {
      id: 2,
      name: 'kintaro',
      description: 'kintaro1',
      lastSelection: 'kintaro1'
    }, {
      id: 1,
      name: 'kintaro2',
      description: 'kintaro2',
      lastSelection: 'kintaro2'
    },
    {
      id: 2,
      name: 'kintaro',
      description: 'kintaro1',
      lastSelection: 'kintaro1'
    }, {
      id: 1,
      name: 'kintaro2',
      description: 'kintaro2',
      lastSelection: 'kintaro2'
    },
    {
      id: 2,
      name: 'kintaro',
      description: 'kintaro1',
      lastSelection: 'kintaro1'
    }, {
      id: 1,
      name: 'kintaro2',
      description: 'kintaro2',
      lastSelection: 'kintaro2'
    },
    {
      id: 2,
      name: 'kintaro',
      description: 'kintaro1',
      lastSelection: 'kintaro1'
    }, {
      id: 1,
      name: 'kintaro2',
      description: 'kintaro2',
      lastSelection: 'kintaro2'
    },
    {
      id: 2,
      name: 'kintaro',
      description: 'kintaro1',
      lastSelection: 'kintaro1'
    },
  ]);
});

module.exports = router;
