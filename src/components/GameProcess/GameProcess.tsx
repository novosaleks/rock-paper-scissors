import React, { useEffect, useState } from 'react';

import './GameProcess.scss';

import { withGameProcess } from '../../containers/hocs';

interface GameProcessProps {
    ResultView: JSX.Element | null,
    ComputerSelection: JSX.Element | null,
    PlayerSelection: JSX.Element | null,
}

const GameProcess: React.FC<GameProcessProps> = ({ ResultView, ComputerSelection, PlayerSelection }) => {
    const [computerSelectionLoaded, toggleComputerSelectionLoaded] = useState<boolean>(false);
    const [resultViewLoaded, toggleResultViewLoaded] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            toggleComputerSelectionLoaded(true);
        }, 1000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            toggleResultViewLoaded(true);
        }, 2000);
    });

    return (
        <section className='game-process'>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-4 col-6 game-process-selection game-process__player-selection">
                        <h2>You picked</h2>
                        <div className="game-process__item">
                            {PlayerSelection}
                        </div>
                    </div>
                    {computerSelectionLoaded && resultViewLoaded ? ResultView : null}
                    <div className="col-lg-3 col-md-4 col-6 game-process-selection game-process__computer-selection">
                        <h2>The house picked</h2>
                        <div className="game-process__item">
                            {computerSelectionLoaded ? ComputerSelection : <div className='empty-item'/>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default withGameProcess()(GameProcess);