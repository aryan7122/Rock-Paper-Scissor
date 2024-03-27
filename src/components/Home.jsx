import React, { useState } from 'react';
import '../styles/Home.css';
import HowPlay from './HowPlay';
import ComputerPlay from './ComputerPlay';
// import FriendPlay from './FriendPlay';

const Home = () => {
    const [showHowToPlay, setShowHowToPlay] = useState(false);
    const [playComputer, setPlayComputer] = useState(false);
    // const [friendPlay, setFriendPlay] = useState(false);

    //how
    const handleHowToPlayButtonClick = () => {
        setShowHowToPlay(prevState => !prevState);
    };

    // const handlePlayButtonClick = () => {
    //     setShowHowToPlay(false);
    // };

    // computer
    const PlayComputerButtonClick = () => {
        setPlayComputer(prevState => !prevState);
    };


    //friends
    // const FriendPlayButtonClick = () => {
    //     setFriendPlay(prevState => !prevState);
    // };

    return (
        <div className='home_main_box'>
            {showHowToPlay && <HowPlay />}
            {playComputer && <ComputerPlay />}
            {/* {friendPlay && <FriendPlay />} */}
            <div className="title_gif">
                <h1>Let's Play Rock Paper Scissor Game </h1>
                <img src="https://media1.giphy.com/media/jqI3buvbN3EitBjHfB/giphy.gif" alt="" />
            </div>
            <div className='buttons'>
                <button onClick={handleHowToPlayButtonClick}>{showHowToPlay ? "Again Guide Me" : "How to Play"}</button>
                <button onClick={PlayComputerButtonClick}>{playComputer ? "Again Play With Computer" : "Play With Computer"}</button>
                {/* <button onClick={FriendPlayButtonClick}>{playComputer ? "Again Play With Friend" : "Play With Friend"}</button> */}
            </div>
        </div>
    );
};

export default Home;
