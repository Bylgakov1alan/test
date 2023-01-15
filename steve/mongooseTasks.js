var mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost/test1')
var steve = require("./models/steve").steve

var steve = new steve({
    title: "dragon",
    nick: "vizer"
})
console.log(steve)
steve.save(function(err, steve, affected){
    console.log(steve.title)
})
