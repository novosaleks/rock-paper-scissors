import React from 'react';

import rock from '../../assets/icons/icon-rock.svg';
import spock from '../../assets/icons/icon-spock.svg';
import paper from '../../assets/icons/icon-paper.svg';
import scissors from '../../assets/icons/icon-scissors.svg';
import lizard from '../../assets/icons/icon-lizard.svg';

import './GameItem.scss';
import { gameItems } from '../../utils/types';

interface GameItemProps {
    type: gameItems;
}

type imgUrlKeys = {
    rock: any, spock: any, paper: any, scissors: any, lizard: any;
}

const GameItem: React.FC<GameItemProps> = ({ type}) => {
    const imgUrl: imgUrlKeys = { rock, spock, paper, scissors, lizard };

    return (
        <div className={`game-item ${type}`}>
            <div className="game-item__content">
                <img src={imgUrl[type]} alt={type}/>
            </div>
        </div>
    );
};

export default GameItem;