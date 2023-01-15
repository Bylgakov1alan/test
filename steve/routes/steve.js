var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с steve');
});

/* Страница стива */
router.get('/:nick', function(req, res, next) {
    steve.findOne({nick:req.params.nick}, function(err,steve){
        if(err) return next(err)
        if(!steve) return next(new Error("Нет такого котенка в этом мультике"))
        res.render('steve', {
            title: steve.title,
            picture: steve.avatar,
            desc: steve.desc
        })
    })
})


module.exports = router;