import React, { useState, useEffect } from 'react';

import GameItem from '../../components/GameItem';
import GameResult from '../../components/GameResult';

import { gameItems, gameResult } from '../../utils/types';
import { isGameItems } from '../../utils/typeCheckers';

type baseProps = {
    playerSelection: gameItems,
    dropSelection: () => void
    changeScore: (diff: number) => void,
}

type injectedProps = {
    ResultView: JSX.Element,
    ComputerSelection: JSX.Element,
    PlayerSelection: JSX.Element,
    result: number,
};

const withGameProcess = () => (View: React.ComponentType<injectedProps>) => {
    return (props: baseProps) => {
        const [gameResult, setGameResult] = useState<gameResult | null>(null);

        useEffect(() => {
            const computerSelectionNumber = Math.floor(Math.random() * 5);

            /*
            INDEXES: 0 - spock, 1 - scissors, 2 - paper, 3 - rock, 4 - lizard
            Values in array mean result: -1 = lose, 0 = draw, 1 = win.
            Example: resultMap[0][1] means that player chose spock (0) and computer chose scissors (1).
            The result is 1. It means spock heats scissors. Player win.
            */
            const resultMap = [
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

            setGameResult({ result, computerSelection });
        }, [props.playerSelection]);

        const result = gameResult ? gameResult.result : 0;

        const computerSelection = gameResult && isGameItems(gameResult.computerSelection) ?
            <GameItem type={gameResult.computerSelection}/> : <></>;

        const resultView = gameResult ?
            <GameResult changeScore={props.changeScore} dropSelection={props.dropSelection}
                        result={result}/>
            : <></>;

        const playerSelection = props.playerSelection ?
            <GameItem type={props.playerSelection}/>
            : <></>;

        return <View ResultView={resultView}
                     ComputerSelection={computerSelection}
                     PlayerSelection={playerSelection}
                     result={gameResult ? gameResult.result : 0}
        />;
    };
};

export default withGameProcess;