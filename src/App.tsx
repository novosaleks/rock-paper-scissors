import React, { useState } from 'react';

import AppHeader from './components/AppHeader';
import AppInterface from './components/AppInterface';
import AppFooter from './components/AppFooter';
import AppModal from './components/AppModal';
import PortalComponent from './containers/PortalComponent';
import GameProcess from './components/GameProcess';

import { gameItems } from './types';

const App: React.FC = () => {
    const [isModalActive, toggleModal] = useState<boolean>(false);
    const [playerSelection, selectItem] = useState<gameItems | null>(null);
    const [score, setScore] = useState<number>(0);

    const switchModal = () => toggleModal(isModalActive => !isModalActive);

    const dropSelection = () => selectItem(null);

    const changeScore = (diff: number) => setScore(value => {
        if (!value && diff !== 1) {
            return value;
        }
        
        return value + diff;
    });

    const modal = isModalActive ?
        <PortalComponent id='modal-root'>
            <AppModal switchModal={switchModal}/>
        </PortalComponent>
        : null;

    const gameContent = playerSelection ?
        <GameProcess dropSelection={dropSelection} changeScore={changeScore} playerSelection={playerSelection}/> :
        <AppInterface selectItem={selectItem}/>;

    return (
        <>
            <AppHeader score={score}/>
            {gameContent}
            <AppFooter switchModal={switchModal}/>
            {modal}
        </>
    );
};

export default App;