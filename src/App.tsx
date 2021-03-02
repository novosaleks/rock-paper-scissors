import React, { useEffect, useState } from 'react';

import AppHeader from './components/AppHeader';
import AppInterface from './pages/AppInterface';
import AppFooter from './components/AppFooter';
import AppModal from './pages/AppModal';
import PortalComponent from './containers/PortalComponent';
import GameProcess from './pages/Game';

import { gameItems } from './utils/types';

const App: React.FC = () => {
    const [isModalActive, toggleModal] = useState<boolean>(false);
    const [playerSelection, selectItem] = useState<gameItems | null>(null);
    const [score, setScore] = useState<number>(0);

    useEffect(() => {
        const loadedScore = localStorage.getItem('game-score');

        if (loadedScore) {
            setScore(+loadedScore)
        }
    }, [])


    const switchModal = () => toggleModal(isModalActive => !isModalActive);

    const dropSelection = () => selectItem(null);

    const changeScore = (diff: number) => setScore((value: number) => {
        if (!value && diff !== 1) {
            return value;
        }

        const newValue = value + diff;
        localStorage.setItem('game-score', String(newValue));

        return newValue;
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