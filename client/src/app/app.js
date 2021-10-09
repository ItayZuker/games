import React, { useContext } from 'react';
import { GlobalContext } from "../global_context/global_context";
import MainPanel from './main_panel/main_panel.js';
import GameStage from './game_stage/game_stage.js';
import './app.scss';

const App = () => {

    const { test } = useContext(GlobalContext);

    return (
        <div className='app_container'>
            <MainPanel />
            <GameStage />
        </div>
    )
}

export default App