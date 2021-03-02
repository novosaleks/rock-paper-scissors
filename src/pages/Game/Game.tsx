import React, { useEffect, useState } from 'react';

import './Game.scss';

import { withGameProcess } from '../../containers/hocs';
import WinnerIndicator from '../../components/WinnerIndicator';

interface GameProcessProps {
    ResultView: JSX.Element,
    ComputerSelection: JSX.Element,
    PlayerSelection: JSX.Element,
    result: number,
}

const Game: React.FC<GameProcessProps> = ({ ResultView, ComputerSelection, PlayerSelection, result }) => {
    const [computerSelectionLoaded, toggleComputerSelectionLoaded] = useState<boolean>(false);
    const [resultViewLoaded, toggleResultViewLoaded] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            toggleComputerSelectionLoaded(true);

            setTimeout(() => {
                toggleResultViewLoaded(true);
            }, 1000);
        }, 1000);
    }, []);

    return (
        <section className='game-process'>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-4 col-6 game-process-selection game-process__player-selection">
                        <h2>YOU PICKED</h2>
                        <div className="game-process__item">
                            {PlayerSelection}
                            <div
                                className={`winner-indicator__wrapper ${resultViewLoaded && result === 1 ? 'indicator_active' : ''}`}>
                                <WinnerIndicator/>
                            </div>
                        </div>
                    </div>
                    {resultViewLoaded ?
                        <div
                            className={`col-lg-3 mt-md-5 col-md-4 col-12 order-1 order-md-0 game-process-result ${!resultViewLoaded ? 'd-none' : ''}`}>
                            {ResultView}
                        </div>
                        : null}
                    <div className="col-lg-4 col-md-4 col-6 game-process-selection game-process__computer-selection">
                        <h2>THE HOUSE PICKED</h2>
                        <div className="game-process__item">
                            {computerSelectionLoaded ? ComputerSelection : <div className='empty-item'/>}
                            <div
                                className={`winner-indicator__wrapper ${resultViewLoaded && result === -1 ? 'indicator_active' : ''}`}>
                                <WinnerIndicator/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default withGameProcess()(Game);