var express = require('express');
var router = express.Router();


const initialRegisterCheck = require('../middleware/registerCheck');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register' ,initialRegisterCheck,);

module.exports = router;
