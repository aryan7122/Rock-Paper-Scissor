import React, { useState, useEffect } from 'react';
import '../styles/HowPlay.css';

const ComputerPlay = () => {
    const [showHowToPlay, setShowHowToPlay] = useState(true);
    const [playAgain, setPlayAgain] = useState()
    const [playAgain2, setPlayAgain2] = useState()
    // const [won, setWon] = useState()
    const [winner, setWinner] = useState('')
    console.log(winner)

    const handlePlayButtonClick = () => {
        setShowHowToPlay(false);
    };


    const left_hand = ['✌🏻', '🤜🏻', '🫱🏻', '🤜🏻', '🫱🏻', '✌🏻'];
    const right_hand = ['✌🏻', '🤛🏻', '🫲🏻', '✌🏻', '🤛🏻', '🫲🏻'];

    const getRandomIndex = () => {
        return Math.floor(Math.random() * 3);
    };

    const againPlay = () => {
        setPlayAgain(getRandomIndex())
        setPlayAgain2(getRandomIndex())
    }


    const randomLeftHand = left_hand[playAgain];
    const randomRightHand = right_hand[playAgain2];

    useEffect(() => {
        if ( (randomLeftHand === '🤜🏻' && randomRightHand === '🤛🏻') || (randomLeftHand === '🫱🏻' && randomRightHand === '🫲🏻') || (randomLeftHand === '✌🏻' && randomRightHand === '✌🏻')) {
            setWinner(' It\'s a tie!');
        } else if (
            (randomLeftHand === '🫱🏻' && randomRightHand === '✌🏻') || (randomLeftHand === '✌🏻' && randomRightHand === '🤛🏻') || (randomLeftHand === '🤜🏻' && randomRightHand === '🫲🏻') ||
            (randomLeftHand === '✌🏻' && randomRightHand === '🤛🏻')
        ) {
            setWinner('You win!');
        } else if (
            (randomLeftHand === '✌🏻' && randomRightHand === '🫲🏻') || (randomLeftHand === ' 🤛🏻' && randomRightHand === '✌🏻') || (randomLeftHand === '🫲🏻' && randomRightHand === ' 🤜🏻') ||
            (randomLeftHand === '🤜🏻' && randomRightHand === '✌🏻') || (randomLeftHand === '🫱🏻' && randomRightHand === '🤛🏻')
        ) {
            setWinner('Computer wins!');
        }
    }, [randomLeftHand, randomRightHand, playAgain]);


    return (
        <div className={showHowToPlay ? 'how_to_play_main' : 'how_to_play_main_hidden'}>
            {showHowToPlay && (
                <>
                    <div>
                        <button onClick={handlePlayButtonClick}>Out of the Game</button>
                    </div>
                    <div id='hand_to'>
                        <div id='left_hand'>
                            <h1>{randomLeftHand}</h1>
                            {/* <p>Computer</p>
                            <p>won</p> */}
                        </div>
                        <div id='right_hand'>
                            <h1>{randomRightHand}</h1>
                            <p>You</p>
                            <p>Lose</p>
                        </div>
                    </div>
                    <h1>{winner === '' ? 'Chalo Suru Kare' : `${winner}`}</h1>
                    <button onClick={againPlay}> play</button>
                </>
            )}
        </div>
    )
}

export default ComputerPlay;
