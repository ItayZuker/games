import React, { useState } from "react";
const RandomSquareBox = React.createContext();

const RandomSquareBoxContextComponent = (props) => {

    const [reload, setReload] = useState(true);
    const [freezeGame, setFreezeGame] = useState(false)
    const [counter, setCounter] = useState(0);
    const [randomArray, setRandomArray] = useState([]);
    const [totalSquares, setTotalSquares] = useState(16);
    const [totalBingo, setTotalBingo] = useState(0);
    const [clickOne, setClickOne] = useState({
        id: null,
        open: false,
        freeze: false
    });
    const [colors] = useState([
        'color_one',
        'color_two',
        'color_three',
        'color_four',
        'color_five',
        'color_six',
        'color_seven',
        'color_eight',
        'color_one',
        'color_two',
        'color_three',
        'color_four',
        'color_five',
        'color_six',
        'color_seven',
        'color_eight'
    ]);

    const contextValue = {
        reload,
        setReload,
        setFreezeGame,
        freezeGame,
        counter,
        setCounter,
        randomArray,
        setRandomArray,
        totalSquares,
        setTotalSquares,
        totalBingo,
        setTotalBingo,
        clickOne,
        setClickOne,
        colors

    }

    return (
        <RandomSquareBox.Provider value={ contextValue }>
            { props.children }
        </RandomSquareBox.Provider>
    )
}

export { RandomSquareBox, RandomSquareBoxContextComponent }
