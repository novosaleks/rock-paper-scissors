import React from 'react';

import './AppFooter.scss'

interface AppFooterProps {
    switchModal: () => void
}

const AppFooter: React.FC<AppFooterProps> = ({switchModal}) => {
    return (
        <footer className='app-footer'>
            <div className="container-fluid">
                <button onClick={switchModal} className='app-footer__rules'>RULES</button>
            </div>
        </footer>
    );
};

export default AppFooter;