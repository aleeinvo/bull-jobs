var express = require('express');
var router = express.Router();
const mailQueue = require('../services/mailQueue');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bull Jobs' });
});

router.get('/dev', async (req, res) => {
  const tos = [
    'aleedhx@gmail.com',
    'ali.asghar@invozone.com',
    'aleedhillon@gmail.com'
  ];

  mailQueue.add(tos);

  return res.status(200).json({
    message: 'Job has been initiated',
    data: {}
  });
});

module.exports = router;
