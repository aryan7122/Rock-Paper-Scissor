import React, { useState } from 'react';
import '../styles/HowPlay.css';

const HowPlay = () => {
    const [showHowToPlay, setShowHowToPlay] = useState(true);

    const handlePlayButtonClick = () => {
        setShowHowToPlay(false);
    };

    return (
        <div className={showHowToPlay ? 'how_to_play_main' : 'how_to_play_main_hidden'}>
            {showHowToPlay && (
                <>
                    <button onClick={handlePlayButtonClick}>Now Play Game</button>
                    <h2> Rock Paper Scissor Game Rules</h2>
                    <div className="text_guidance">
                        <div className="left">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rock-paper-scissors.svg/1200px-Rock-paper-scissors.svg.png" width='500px' alt="" />
                        </div>
                        <div className="right">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/ND4fd6yScBM?si=oTNgJ-_6RNxZC0Bk&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div className="guidance_text">
                                {/* <h1>Rock Paper Scissors Game Rules</h1> */}
                                <h2>Step by Step Guide:</h2>

                                <ul>
                                    <li>Start the Game
                                        <ul>
                                            <li>Press the "Play" button to start the game.</li>
                                            <li>Choose whether you want to play against the computer or with a friend.</li>
                                        </ul>
                                    </li>
                                    <li>Enter Player Names
                                        <ul>
                                            <li>Enter your name and your opponent's name if playing with a friend.</li>
                                            <li>If playing against the computer, your opponent will be named "Computer".</li>
                                        </ul>
                                    </li>
                                    <li>Choose Game Mode
                                        <ol>
                                            <li>Quick Mode: The first to win 2 out of 3 rounds wins.</li>
                                            <li>Standard Mode: Play 5 rounds to determine the winner.</li>
                                            <li>Extended Mode: Play 10 rounds and the player with the most wins at the end wins the game.</li>
                                        </ol>
                                    </li>
                                    <li>Playing the Game
                                        <ul>
                                            <li>Each player selects either rock, paper, or scissors.</li>
                                            <li>Once both players have made their choice, the winner of that round is determined based on the following:
                                                <ul>
                                                    <li>Rock beats scissors.</li>
                                                    <li>Scissors beats paper.</li>
                                                    <li>Paper beats rock.</li>
                                                </ul>
                                            </li>
                                            <li>The winner of each round earns a point.</li>
                                        </ul>
                                    </li>
                                    <li>Winning the Game
                                        <ul>
                                            <li>In Quick Mode, the first player to reach 2 points wins.</li>
                                            <li>In Standard Mode, the player with the most points after 5 rounds wins.</li>
                                            <li>In Extended Mode, the player with the highest score after 10 rounds wins.</li>
                                        </ul>
                                    </li>
                                    <li>Replay
                                        <ul>
                                            <li>After completing the selected number of rounds, you have the option to play again by pressing the "Play Again" button.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default HowPlay;
