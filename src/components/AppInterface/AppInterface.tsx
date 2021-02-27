import React from 'react';

import pentagon from '../../assets/images/bg-pentagon.svg';
import rock from '../../assets/icons/icon-rock.svg';
import lizard from '../../assets/icons/icon-lizard.svg';
import paper from '../../assets/icons/icon-paper.svg';
import scissors from '../../assets/icons/icon-scissors.svg';
import spock from '../../assets/icons/icon-spock.svg';

import './AppInterface.scss';

const AppInterface: React.FC = () => {
    return (
        <section className='app-interface'>
            <div className="container">
                <div className="app-interface__field">
                    <img src={pentagon} alt="pentagon"/>
                    <div className="app-interface__wrapper">
                        <div className="app-interface__item">
                            <img src={spock} alt="rock"/>
                        </div>
                    </div>
                    <div className="app-interface__wrapper">
                        <div className="app-interface__item">
                            <img src={scissors} alt="rock"/>
                        </div>
                    </div>
                    <div className='app-interface__wrapper'>
                        <div className="app-interface__item">
                            <img src={paper} alt="rock"/>
                        </div>
                    </div>
                    <div className="app-interface__wrapper">
                        <div className="app-interface__item">
                            <img src={rock} alt="rock"/>
                        </div>
                    </div>
                    <div className="app-interface__wrapper">
                        <div className="app-interface__item">
                            <img src={lizard} alt="rock"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppInterface;