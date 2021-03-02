import React from 'react';

import pentagon from '../../assets/images/bg-pentagon.svg';

import './AppInterface.scss';
import GameItem from '../../components/GameItem';
import { gameItems } from '../../utils/types';

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
                        <GameItem type='spock'/>
                    </div>
                    <div className="app-interface__wrapper" onClick={() => selectItem('scissors')}>
                        <GameItem type='scissors'/>
                    </div>
                    <div className='app-interface__wrapper' onClick={() => selectItem('paper')}>
                        <GameItem type='paper'/>
                    </div>
                    <div className="app-interface__wrapper" onClick={() => selectItem('rock')}>
                        <GameItem type='rock'/>
                    </div>
                    <div className="app-interface__wrapper" onClick={() => selectItem('lizard')}>
                        <GameItem type='lizard'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppInterface;