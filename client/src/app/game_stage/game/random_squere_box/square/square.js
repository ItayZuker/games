import React, {useContext, useState, useEffect} from 'react';
import './square.scss';
import {RandomSquareBox} from "../../../../../global_context/random_square_box_context";

const Square = (props) => {

    const {
        colors,
        clickOne,
        setClickOne,
        randomArray,
        setRandomArray,
        totalSquares,
        setTotalBingo
    } = useContext(RandomSquareBox);

    const [localClick, setLocalClick] = useState(false);
    const [localBingo, setLocalBingo] = useState(false);
    const [totalHalf] = useState(totalSquares / 2);

    useEffect(() => {
        randomArray.map(square => {
            if(square.id === props.square.id) {
                if(square.bingo) {
                    setLocalBingo(true);
                } else if(square.clicked) {
                    setLocalClick(true);
                    setLocalBingo(false);
                } else {
                    setLocalClick(false);
                    setLocalBingo(false);
                }
            }
        })
    }, [randomArray]);

    const clickTheSquare = async () => {
        if(clickOne.open) {
            if(!clickOne.freeze) {
                setClickOne({...clickOne, freeze: true});
                setLocalClick(true);
                setTimeout(() => {
                    const difference = Math.abs(clickOne.id - props.square.id);
                    if(difference === totalHalf) {
                        console.log('BINGO!');
                        setTotalBingo(0);
                        setRandomArray(randomArray.map(square => {
                            if(square.clicked) {
                                setTotalBingo(prevState => prevState += 1);
                                return {...square, bingo: true}
                            } else if(square.id === props.square.id) {
                                setTotalBingo(prevState => prevState += 1);
                                return {...square, clicked: true, bingo: true};
                            } else {
                                return square;
                            }
                        }));
                        setClickOne({open: false, id: null, freeze: false});
                    } else {
                        console.log('NO..');
                        setRandomArray(randomArray.map(square => {
                            if(square.clicked) {
                                return {...square, clicked: false};
                            } else {
                                return square;
                            }
                        }));
                        setClickOne({open: false, id: null, freeze: false});
                    }
                }, 300);
            }
        } else {
            setClickOne({...clickOne, open: true, id: props.square.id});
            await setRandomArray(randomArray.map(square => {
                if(square.id === props.square.id) {
                    return {...square, clicked: true};
                } else {
                    return square;
                }
            }));
        }
    };

    return (
        <div className='square_container'>
            <div className={'square ' + colors[props.square.id] + (localClick ? ' clicked' : '') + (localBingo ? ' bingo' : '')}
                onClick={() => clickTheSquare()}>
                <h3>{props.square.id}</h3>
            </div>
        </div>
    )
}

export default Square