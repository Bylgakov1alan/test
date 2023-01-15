var express = require('express');
var router = express.Router();
var steve = require("../models/steve").steve
var async = require("async")

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('Новый маршрутизатор, для маршрутов, начинающихся с steve');
// });

/* Страница маинкрафта */
router.get("/:nick", function(req, res, next){
    async.parallel([
        function(callback){
            steve.findOne({nick: req.params.nick},callback)
        },
        function(callback){
            steve.find({},{_id:0,title:1,nick:1}, callback)
        }
    ],
    function(err, result){
        if(err) return next(err)
        var steve = result[0]
        var steves = result[1] || []
        // console.log(steve)
        if(!steves) return next (new Error("Нет такого персонажа в этой игре"))
        // console.log(steve.avatar)
        res.render('steve', {
            title: steve.title,
            picture: steve.avatar,
            desc: steve.desc, 
            menu: steve
        })
    })
});

module.exports = router;