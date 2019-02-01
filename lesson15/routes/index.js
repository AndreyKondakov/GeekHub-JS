var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DayFooD' });
});


// other pages :
router.get('/add-dish', function(req, res, next) {
  res.render('add-dish', { title: 'DayFooD' });
});

router.get('/all-dishes', function(req, res, next) {
  res.render('all-dishes', { title: 'DayFooD' });
});

router.get('/day-menu', function(req, res, next) {
  res.render('day-menu', { title: 'DayFooD' });
});



module.exports = router;
