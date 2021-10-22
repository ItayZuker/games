import React, {useContext, useEffect, useState} from 'react';
import Square from './square/square'
import ReloadButton from "./reload_button/reload_button";
import './random_square_box_game.scss';
import {RandomSquareBox} from "../../../../global_context/random_square_box_context";

const RandomSquareBoxGame = () => {

    const {
        reload,
        setReload,
        counter,
        setCounter,
        randomArray,
        setRandomArray,
        totalSquares,
        totalBingo,
        setClickOne
    } = useContext(RandomSquareBox);

    const [winCover, setWinCover] = useState(false);

    useEffect(() => {
        if(totalBingo === totalSquares) {
            setWinCover(true);
        }
    }, [totalBingo]);

    useEffect( () => {
        if (reload) {
            setReload(false);
            setCounter(0);
            setWinCover(false);
            setClickOne({
                id: null,
                open: false,
                freeze: false
            });
            const createSquares = async () => {
                const res = await createRandomArray();
                let newArray = await res.map(item => {
                    return {
                        id: item,
                        clicked: false,
                        bingo: false
                    };
                });
                setRandomArray(newArray);
                console.log(counter);
            };
            createSquares();
        }
    }, [reload]);

    const checkIfUnique = (number, array) => {
        return new Promise((resolve) => {
            // if (array.length < 8) {
                for(let i = 0; i <= array.length; i++) {
                    if (number === array[i]) {
                        setCounter(prevStat => prevStat += 1);
                        number === 15 ? number = 0 : number += 1;
                        resolve(number);
                    } else if (i === (array.length)) {
                        resolve(number);
                    }
                }
            // } else {
            //     for(let i = 8; i <= array.length; i++) {
            //         if (number === array[i]) {
            //             setCounter(prevStat => prevStat += 1);
            //             number === 15 ? number = 8 : number += 1;
            //             resolve(number);
            //         } else if (i === (array.length)) {
            //             resolve(number);
            //         }
            //     }
            // }
        });
    };

    const createRandomArray = async () => {

        let array = [],
            newNumber = true,
            randomNumber = null,
            resNumber = null,
            totalHalf = totalSquares / 2;

        while (array.length < totalSquares) {
            if (newNumber) {
                // if (array.length < totalHalf) {
                    randomNumber = await Math.floor(Math.random() * totalSquares);
                    newNumber = false;
                    resNumber = await checkIfUnique(randomNumber, array);
                // } else {
                //     randomNumber = await Math.floor(Math.random() * totalHalf) + totalHalf;
                //     newNumber = false;
                //     resNumber = await checkIfUnique(randomNumber, array);
                // }
            } else {
                resNumber = await checkIfUnique(randomNumber, array);
            }
            if (resNumber === randomNumber) {
                array.push(resNumber);
                newNumber = true;
            } else {
                randomNumber = resNumber;
            }
        }

        return array;
    }

    const savePlay = async () => {
        try {
            const res = await fetch('/random-square-box/play', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: prompt('Enter name'),
                    score: 1234
                }),
            });
            const message = await res.json()
            console.log(message)
        } catch ( err ) {
            console.log(err)
        }
    };

    return (
        <div className='random_square_box_game_container'>
            <div className='boxes_container'>
                {randomArray.map( (square, index) => {
                    return <Square
                        key={index}
                        square={square}/>
                })}
                <div className={'win_cover ' + (winCover ? 'active ' : '')}>
                    <h1>WIN!</h1>
                </div>
            </div>
            <ReloadButton />
        </div>
    );
};

export default RandomSquareBoxGame