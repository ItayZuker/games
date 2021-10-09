const express = require('express')
const router = express.Router()
const Random_Square_Box_Players_Model = require('../models/Random_Square_Box_Players.model.js')

const validate = (name, score) => {
    return new Promise((resolve, reject) => {
        if(name != "") {
            if(score != "") {
                resolve()
            } else {
                reject("No score")
            }
        } else {
            reject("No name")
        }
    })
}

router.post('/play', async( req, res ) => {
    try {
        await validate(req.body.name, req.body.score);
        await Random_Square_Box_Players_Model
            .create({
                date: new Date(),
                name: req.body.name,
                score: req.body.score,
                position: 0,
            }, ( err, docs ) => {
                if( err ) {
                    res.status( 500 ).send( err )
                } else {
                    res.status( 200 ).json( 'gg' )
                }
            });

    } catch ( err ) {
        res.status( 500 ).send( err )
    }
});

router.put('/update-scoreboard', async( req, res ) => {
    try {
        await Random_Square_Box_Players_Model.find({}, (err, docs) => {
            if( err ) {
                res.status( 500 ).send( err )
            } else {
                res.status( 200 ).json( docs )
            }
        })
    } catch ( err ) {
        res.status( 500 ).send( err )
    }
});

module.exports = router