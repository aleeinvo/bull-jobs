var express = require('express');
var router = express.Router();
const mailer = require('../services/mailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dev', async (req, res) => {
  let info = await mailer.send('ali.asghar@gmail.com');

  return res.status(200).json({
    message: 'Mail has been sent successfully',
    data: {
      info: info
    }
  });
})

module.exports = router;
