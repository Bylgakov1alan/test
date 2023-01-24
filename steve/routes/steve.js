var express = require('express');
var router = express.Router();
var steve= require("../models/steve").steve

/* GET home page. */
router.get('/', function(req, res, next) {
    req.session.greeting = "Hi!!!"
    res.render('index', { title: 'персонажи маинкрафта', counter:req.session.counter });
});

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
res.render('logreg', {title: 'Вход'});
});



module.exports = router;