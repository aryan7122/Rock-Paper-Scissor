import React, { useState } from 'react';
import '../styles/HowPlay.css';
const FriendPlay = () => {
    const [showHowToPlay, setShowHowToPlay] = useState(true);

    const handlePlayButtonClick = () => {
        setShowHowToPlay(false);
    };
    return (
        <div className={showHowToPlay ? 'how_to_play_main' : 'how_to_play_main_hidden'}>
            {showHowToPlay && (
                <>
                    <button onClick={handlePlayButtonClick}>Play Game </button>
                </>
            )}
        </div>
    )
}

export default FriendPlay