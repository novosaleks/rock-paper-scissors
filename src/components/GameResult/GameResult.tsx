import React, { useEffect } from 'react';

import './GameResult.scss';

interface GameResultProps {
    result: number,
    dropSelection: () => void
    changeScore: (diff: number) => void;
}

const GameResult: React.FC<GameResultProps> = ({ result, dropSelection, changeScore }) => {
    useEffect(() => {
        changeScore(result);
    }, []);

    enum transformResult {
        lose = -1,
        draw,
        win
    }

    const message = transformResult[result] === 'draw' ? 'Draw!' : `You ${transformResult[result]}!`;

    return (
        <div className='game-result'>
            <h2 className='game-result__title'>{message}</h2>
            <button onClick={dropSelection} className='game-result__reset'>PLAY AGAIN</button>
        </div>
    );
};

export default GameResult;