var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница Стива */
router.get('steve/public/images/steve.jpg', function(req, res, next) {
    res.send("<h1>Страница Стива</h1>")
});

/* Страница Дракона */
router.get('steve/public/images/dargon.jpg', function(req, res, next) {
    res.send("<h1>Страница Дракона</h1>")
});

/* Страница Визер */
router.get('steve/public/images/vizer.jpg', function(req, res, next) {
    res.send("<h1>Страница Визер</h1>")
});


module.exports = router;
