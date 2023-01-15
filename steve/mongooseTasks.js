var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

var Cat = mongoose.model('steve', { name: String })

var kitty = new Cat({ name: 'steve' })
kitty.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('rrr')
    }
})
