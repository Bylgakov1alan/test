var express = require('express');
var router = express.Router();
var steve = require("../models/steve").steve
var async = require("async")

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('Новый маршрутизатор, для маршрутов, начинающихся с steve');
// });

/* Страница маинкрафта*/
router.get("/:nick", function(req, res, next){

    steve.findOne({nick: req.params.nick}, function(err, steve){
        if(err) return next(err)
        // console.log(steve)
        if(!steve) return next (new Error("Нет такого персонажа в этой игре"))
        res.render('steve', {
            title: steve.title,
            picture: steve.avatar,
            desc: steve.desc
        })
    })
});

module.exports = router;