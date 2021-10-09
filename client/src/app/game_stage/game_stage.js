import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Game from './game/game.js';
import './game_stage.scss';

const GameStage = () => {

    return (
        <div className='game_stage_container'>
            <Switch>
                <Route path='/' exact component={ Game } />
                <Route path='/:game' component={ Game } />
            </Switch>
        </div>
    )
}

export default GameStage