import React from 'react';
import { useParams } from "react-router-dom";
import RandomSquareBox from './random_squere_box/random_squere_box.js';
import './game.scss'

const Game = () => {

    const { game } = useParams()

    return (
        <div className='game_container'>
            { game === undefined ? <RandomSquareBox /> : null }
            { game === 'random-square-box' ? <RandomSquareBox /> : null }
        </div>
    )
}

export default Game