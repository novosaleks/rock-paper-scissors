import React from 'react';

import pentagon from '../../assets/images/bg-pentagon.svg';

import './AppInterface.scss';
import GameItem from '../GameItem';
import { gameItems } from '../../types';

interface AppInterfaceProps {
    selectItem: (gameItem: gameItems) => void;
}

const AppInterface: React.FC<AppInterfaceProps> = ({selectItem}) => {
    return (
        <section className='app-interface'>
            <div className="container">
                <div className="app-interface__field">
                    <img src={pentagon} alt="pentagon"/>
                    <div className="app-interface__wrapper" onClick={() => selectItem('spock')}>
                        <GameItem type='spock' modifier='md'/>
                    </div>
                    <div className="app-interface__wrapper" onClick={() => selectItem('scissors')}>
                        <GameItem type='scissors' modifier='md'/>
                    </div>
                    <div className='app-interface__wrapper' onClick={() => selectItem('paper')}>
                        <GameItem type='paper' modifier='md'/>
                    </div>
                    <div className="app-interface__wrapper" onClick={() => selectItem('rock')}>
                        <GameItem type='rock' modifier='md'/>
                    </div>
                    <div className="app-interface__wrapper" onClick={() => selectItem('lizard')}>
                        <GameItem type='lizard' modifier='md'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppInterface;