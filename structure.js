var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db_melee')
    .then(() => {
        console.log('Database connection successful')
    })
    .catch(err => {
        console.error('Database connection error')
    })

var StandingsSchema = new mongoose.Schema({
    sponsor: String,
    tag: String,
    playerName: String,
    placement: Number,
    status: Number
})

module.exports = mongoose.model('Standings', StandingsSchema)
