var express = require('express');
var router = express.Router();




// GET pages:
router.get('/add-dish', function(req, res) {
  res.render('add-dish', { title: 'DayFooD - add dish' });
});

router.get('/all-dishes', function(req, res) {
  res.render('all-dishes', { title: 'DayFooD - all dishes' });
});

router.get('/day-menu', function(req, res) {
  res.render('day-menu', { title: 'DayFooD day menu' });
});




// router.get('/api/users', function(req, res) {
//   res.render('index', { title: 'DayFooD day menu' });
// });


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DayFooD' });
});

module.exports = router;
