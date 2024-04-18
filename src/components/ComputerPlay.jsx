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
    const right_hand = ['🤛🏻', '🫲🏻', '✌🏻']; //'✌🏻', '🤛🏻', '🫲🏻', '✌🏻', '🤛🏻', '🫲🏻'

    const getRandomIndex = () => {
        return Math.floor(Math.random() * 3);
    };

    const againPlay_0 = (e) => {
        setPlayAgain(getRandomIndex())
        setPlayAgain2(0)
    }
    const againPlay_1 = (e) => {
        setPlayAgain(getRandomIndex())
        setPlayAgain2(1)
    }
    const againPlay_2 = (e) => {
        setPlayAgain(getRandomIndex())
        setPlayAgain2(2)
    }


    const randomLeftHand = left_hand[playAgain];
    const randomRightHand = right_hand[playAgain2];

    useEffect(() => {
        if ((randomLeftHand === '🤜🏻' && randomRightHand === '🤛🏻') || (randomLeftHand === '🫱🏻' && randomRightHand === '🫲🏻') || (randomLeftHand === '✌🏻' && randomRightHand === '✌🏻')) {
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
                        <button onClick={handlePlayButtonClick} id='top_btn'>Out of the Game</button>
                    </div>
                    <div id='hand_to'>
                        <div id='left_hand'>
                            <h1>{randomLeftHand}</h1>
                            <p>Computer</p>
                            {/* <p>won</p> */}
                        </div>
                        <div id='right_hand'>
                            <h1>{randomRightHand}</h1>
                            <p>You</p>
                            {/* <p>Lose</p> */}
                        </div>
                    </div>
                    <h1>{winner === '' ? 'Chalo Suru Kare' : `${winner}`}</h1>
                    <button onClick={againPlay_0} id='0'>
                        🤛🏻
                    </button>
                    <button onClick={againPlay_1} id='1'>
                        🫲🏻
                    </button>
                    <button onClick={againPlay_2} id='2'>
                        ✌🏻
                    </button>
                </>
            )}
        </div>
    )
}

export default ComputerPlay;
