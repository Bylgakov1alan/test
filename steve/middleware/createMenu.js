var steve = require("../models/steve").steve

app.use(function(req,res,next){
    res.locals.nav = []

    steve.find(null,{_id:0,title:1,nick:1},function(err,result){
        if(err) throw err
        res.locals.nav = result
        next()
    })
})

