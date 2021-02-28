import React, { useEffect, useState } from 'react';

import './GameProcess.scss';
import GameItem from '../GameItem';
import GameResult from '../GameResult';

import { gameItems, gameResult } from '../../types';

import { withGameProcess } from '../../containers/hocs';

interface GameProcessProps {
    resultView: JSX.Element | null,
    computerSelection: JSX.Element | null,
    playerSelection: JSX.Element | null,
}

const GameProcess: React.FC<GameProcessProps> = ({ resultView, computerSelection, playerSelection }) => {
    return (
        <section className='game-process'>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-3 game-process-selection game-process__player-selection">
                        <h2>You picked</h2>
                        <div className="game-process__item">
                            {playerSelection}
                        </div>
                    </div>
                    {resultView}
                    <div className="col-3 game-process-selection game-process__computer-selection">
                        <h2>The house picked</h2>
                        <div className="game-process__item">
                            {computerSelection}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default withGameProcess()(GameProcess);