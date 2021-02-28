import React from 'react';

import './AppHeader.scss'

import logo from '../../assets/images/logo-bonus.svg'

interface AppHeaderProps {
    score: number
}

const AppHeader: React.FC<AppHeaderProps> = ({score}) => {
    return (
        <header className='app-header'>
            <div className="container">
                <div className="app-header__content">
                    <a href="/"><img src={logo} alt="logo"/></a>
                    <div className="app-header__content-score">
                        <div className='score_label'>SCORE</div>
                        <div className='score_point'>{score}</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppHeader;