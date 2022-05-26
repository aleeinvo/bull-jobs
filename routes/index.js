var express = require('express');
var router = express.Router();
const mailQueue = require('../services/mailQueue');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Bull Jobs' });
});

router.get('/dev', async (req, res) => {
  const tos = [
    "keely.mann@hodkiewicz.com",
    "nhamill@yahoo.com",
    "cole.rodrigo@lehner.org",
    "leonard92@cruickshank.com",
    "murray.kayleigh@harris.com",
    "tillman.meda@hotmail.com",
    "harris.charley@gibson.com",
    "sterling26@greenfelder.info",
    "kay20@beer.info",
    "gcorwin@yahoo.com",
    "rickie16@larson.com",
    "zieme.damien@schultz.org",
    "xabernathy@bednar.net",
    "lakin.ila@gmail.com",
    "milan77@gmail.com",
    "dagmar.trantow@dickinson.com",
    "rosenbaum.juanita@goyette.com",
    "jennifer.klocko@gmail.com",
    "eric.wehner@klein.com",
    "kayla.swaniawski@jacobi.org"
  ];

  mailQueue.add(tos);

  return res.status(200).json({
    message: 'Job has been initiated',
    data: {}
  });
});

module.exports = router;
