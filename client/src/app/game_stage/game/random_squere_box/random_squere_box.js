import React from 'react';
import './random_square_box.scss';

const RandomSquareBox = () => {

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
    }

    return (
        <div className='random_square_box_container'
            onClick={ () => savePlay() }>

        </div>
    )
}

export default RandomSquareBox