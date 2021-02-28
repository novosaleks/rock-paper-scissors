import React, { useState, useEffect } from 'react';

import GameItem from '../../components/GameItem';
import GameResult from '../../components/GameResult';

import { gameItems, gameResult } from '../../types';

type baseProps = { 
    playerSelection: gameItems, 
    dropSelection: () => void
    changeScore: (diff: number) => void,
}
    
type injectedProps = {
    resultView: JSX.Element | null,
    computerSelection: JSX.Element | null,
    playerSelection: JSX.Element | null,
};

const withGameProcess = () => (View: React.ComponentType<injectedProps>) => {
    return (props: baseProps) => {
        const [gameResult, setGameResult] = useState<gameResult | null>(null);

        useEffect(() => {
            const computerSelectionNumber = Math.floor(Math.random() * 5),
                  resultMap               = [
                      [0, 1, -1, 1, -1],
                      [-1, 0, 1, -1, 1],
                      [1, -1, 0, 1, -1],
                      [-1, 1, -1, 0, 1],
                      [1, -1, 1, -1, 0],
                  ];

            enum switchSelection {
                spock,
                scissors,
                paper,
                rock,
                lizard
            }

            const computerSelection = switchSelection[computerSelectionNumber];
            const result = resultMap[switchSelection[props.playerSelection]][computerSelectionNumber];

            props.changeScore(result);
            setGameResult({ result, computerSelection });
        }, [props.playerSelection]);

        const isGameItems = (value: any): value is gameItems => {
            return value === 'rock' || value === 'paper' || value === 'scissors' || value === 'lizard' || value === 'spock';
        };

        const computerSelection = gameResult && isGameItems(gameResult.computerSelection) ?
            <GameItem type={gameResult.computerSelection} modifier='bg'/> : null;

        const resultView = gameResult && typeof gameResult.result === 'number' ?
            <div className="col-2 game-process-selection game-process-result">
                <GameResult dropSelection={props.dropSelection} result={gameResult.result}/>
            </div>
            : null;

        const playerSelection = props.playerSelection ?
            <GameItem type={props.playerSelection} modifier='bg'/>
            : null;

        if (gameResult) {
            return <View resultView={resultView}
                         computerSelection={computerSelection}
                         playerSelection={playerSelection}/>;
        }

        return null;
    };
};

export default withGameProcess;