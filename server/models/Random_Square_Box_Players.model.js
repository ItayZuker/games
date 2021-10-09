const mongoose = require('mongoose');
const Random_Square_Box_Play_Schema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        require: true,
    },
    score: {
        type: Number,
        require: true,
    },
    position: {
        type: Number,
        require: true,
    }
});

const Random_Square_Box_Players_Model = mongoose.model('Random_Square_Box_player', Random_Square_Box_Play_Schema);
module.exports = Random_Square_Box_Players_Model;
