var express = require('express');
var router = express.Router();
var steve = require("../models/steve").steve
var User = require("./../models/user").User
var checkAuth = require("./../middleware/checkAuth.js")

/* GET home page. */
router.get('/', function(req, res, next) {
    req.session.greeting = "Hi!!!"
    res.render('index', { title: 'Сумеречные охотники', counter:req.session.counter });
});
/* POST logout. */
router.post('/logout', function(req, res, next) {
    req.session.destroy()
    res.locals.user = null
    res.redirect('/')
});

/* GET auth page. */
router.get('/logreg', function(req, res, next) {
    res.render('logreg',{error:null});
});

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
res.render('logreg', {title: 'Вход'});
});

/* POST login/registration page. */
router.post('/logreg', function(req, res, next) {
var username = req.body.username
var password = req.body.password
User.findOne({username:username},function(err,user){
        if(err) return next(err)
        if(user){
            if(user.checkPassword(password)){
                req.session.user = user._id
                res.redirect('/')
            } else {
                res.render('logreg', {title: 'Вход'})
            }
    } else {
    var user = new User({username:username,password:password})
            user.save(function(err,user){
                if(err) return next(err)
                req.session.user = user._id
                res.redirect('/')
            })        
    }
    })
});



module.exports = router;