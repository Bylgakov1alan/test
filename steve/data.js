var data = [{
    title: "стив",
    nick: "steve",
        picture: "https://rare-gallery.com/uploads/posts/235370-steve-minecraft-1920x1080.jpg",
        desc: "Главный персонаж игры маинкрафт, его главной задачей является убийство дракона края. Однако после достижения этой цели можно продолжать развиваться и строить различные механизмы и сооружения."
},

{
    title: "дракон",
    nick: "dragon",
        picture: "https://phonoteka.org/uploads/posts/2022-09/1663296867_1-phonoteka-org-p-ender-drakon-art-krasivo-1.png",
        desc: "Главный босс игры Маинкрафт. Обитает в измерении энд мир. Его должен победить стив чтобы пройти игру."
},
{
    title: "визер",
    nick: "vizer",
        picture: "https://i.ytimg.com/vi/6OzbF2u5MhM/maxresdefault.jpg",
        desc: "Побочный босс. За его убийство дается звезда нижнего мира. Для его призыва нужно 3 головы скелета-иссушителя."
}];

/* Страница маинкрафт
router.get('/maincraft', function(req, res, next) {
    res.render('steve', {
        title: "маинкрафт",
        nick: "maincraft",
        picture: "https://image.winudf.com/v2/image1/Y29tLnBvY2tldGVkaXRpb25mcmVlLm1vZGZvcm1pbmVjcmFmdC5tb2RzZm9ybWNwZV9zY3JlZW5fcnUtUlVfN18xNTU4NzgwODU0XzAwMg/screen-7.jpg?fakeurl=1&type=.jpg",
        desc: "Маинкрафт игра в которую играют миллионы людей. Это песочница с открытым миром, в котором можно делать все, что захочется."
    });
});

/* Страница скелета 
router.get('/skelet', function(req, res, next) {
    res.render('steve', {
        title: "скелет",
        picture: "https://avatars.mds.yandex.net/i?id=82caae391066ec8c60cb3a449f93a509e3ab8b7c-4010175-images-thumbs&n=13",
        desc: " Скелет один из самых распространённых мобов в игре Маинкрафт, его арсенал состоит из лука и стрел, может подобрать и меч, можно встреть в обычном мире и в аду."
    });
});
/* Страница зомби 
router.get('/zomby', function(req, res, next) {
    res.render('steve', {
        title: "зомби",
        picture: "https://planet-mcpe.com/wp-content/uploads/2018/09/02-9.jpg",
        desc: "Зомби является довольно частым мобом в обычной игре, оружия у него нет."
    });
});
/* Страница житель 
router.get('/IIIytel', function(req, res, next) {
    res.render('steve', {
        title: "житель",
        picture: "https://avatars.mds.yandex.net/i?id=0a5951813aef6a3db67a2fe5003a52890045fca4-5232745-images-thumbs&n=13",
        desc: "Единственный НПС в ванильном Маинкрафте. С ним можно торговать за изумруды, продает от предметы в зависимости от своей профессии."
    });
}); */
module.exports.data = data;