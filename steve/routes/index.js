var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница стива */
router.get('/steve', function(req, res, next) {
    res.render('steve', {
        title: "стив",
        picture: "https://rare-gallery.com/uploads/posts/235370-steve-minecraft-1920x1080.jpg",
        desc: "Главный персонаж игры маинкрафт, его главной задачей является убийство дракона края. Однако после достижения этой цели можно продолжать развиваться и строить различные механизмы и сооружения."
    });
});
/* Страница маинкрафт */
router.get('/maincraft', function(req, res, next) {
    res.render('steve', {
        title: "маинкрафт",
        picture: "https://image.winudf.com/v2/image1/Y29tLnBvY2tldGVkaXRpb25mcmVlLm1vZGZvcm1pbmVjcmFmdC5tb2RzZm9ybWNwZV9zY3JlZW5fcnUtUlVfN18xNTU4NzgwODU0XzAwMg/screen-7.jpg?fakeurl=1&type=.jpg",
        desc: "Маинкрафт игра в которую играют миллионы людей. Это песочница с открытым миром, в котором можно делать все, что захочется."
    });
});

/* Страница Дракон */
router.get('/dragon', function(req, res, next) {
    res.render('steve', {
        title: "Дракон",
        picture: "https://phonoteka.org/uploads/posts/2022-09/1663296867_1-phonoteka-org-p-ender-drakon-art-krasivo-1.png",
        desc: "Главный босс игры Маинкрафт. Обитает в измерении энд мир. Его должен победить стив чтобы пройти игру."
    });
});

/* Страница визер */
router.get('/vizer', function(req, res, next) {
    res.render('steve', {
        title: "визер",
        picture: "https://i.ytimg.com/vi/6OzbF2u5MhM/maxresdefault.jpg",
        desc: "Побочный босс. За его убийство дается звезда нижнего мира. Для его призыва нужно 3 головы скелета-иссушителя."
    });
});


module.exports = router;
