import React from 'react';
import { useParams } from "react-router-dom";
import RandomSquareBoxGame from './random_squere_box/random_squere_box_game.js';
import { RandomSquareBoxContextComponent } from '../../../global_context/random_square_box_context';
import './game.scss'

const Game = () => {

    const { game } = useParams()

    return (
        <div className='game_container'>
            <RandomSquareBoxContextComponent>
                { game === undefined ? <RandomSquareBoxGame /> : null }
            </RandomSquareBoxContextComponent>
            <RandomSquareBoxContextComponent>
                { game === 'random-square-box' ? <RandomSquareBoxGame /> : null }
            </RandomSquareBoxContextComponent>
        </div>
    )
}

export default Game