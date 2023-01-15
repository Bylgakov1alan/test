var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница стива */
router.get('/steve', function(req, res, next) {
    res.render('cat', {
        title: "стива",
        picture: "steve/public/images/steve.jpg",
        desc: "Главный персонаж игры маинкрафт, его главной задачей является убийство дракона края. Однако после достижения этой цели можно продолжать развиваться и строить различные механизмы и сооружения."
    });
});

/* Страница Дракон */
router.get('/kompot', function(req, res, next) {
    res.render('cat', {
        title: "Дракон",
        picture: "steve/public/images/dargon.jpg",
        desc: "Главный босс игры Маинкрафт. Обитает в измерении энд мир. Его должен победить стив чтобы пройти игру."
    });
});

/* Страница визер */
router.get('/vizer', function(req, res, next) {
    res.render('cat', {
        title: "визер",
        picture: "steve/public/images/vizer.jpgimages",
        desc: "Побочный босс. За его убийство дается звезда нижнего мира. Для его призыва нужно 3 головы скелета-иссушителя."
    });
});


module.exports = router;
