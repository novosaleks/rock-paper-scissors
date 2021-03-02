import React, { useCallback, useEffect } from 'react';

import './GameResult.scss';

interface GameResultProps {
    result: number,
    dropSelection: () => void
    changeScore: (diff: number) => void;
}

const GameResult: React.FC<GameResultProps> = ({ result, dropSelection, changeScore }) => {
    const memoizedChangeScore = useCallback(() => changeScore(result), []);

    useEffect(() => {
        memoizedChangeScore();
    }, [result, memoizedChangeScore]);

    enum transformResult {
        LOSE = -1,
        DRAW,
        WIN
    }

    const message = transformResult[result] === 'DRAW' ? 'DRAW!' : `YOU ${transformResult[result]}!`;

    return (
        <div className='game-result'>
            <h2 className='game-result__title'>{message}</h2>
            <button onClick={dropSelection} className='game-result__reset'>PLAY AGAIN</button>
        </div>
    );
};

export default GameResult;