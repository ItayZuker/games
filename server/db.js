const mongoose = require('mongoose')
require('dotenv').config()

let dburl = process.env.MONGODB_ACCESS

mongoose.connect(dburl, {useNewUrlParser: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
    console.log("mongoDb is connected")
})