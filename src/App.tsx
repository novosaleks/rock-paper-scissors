import React, { useState } from 'react';

import AppHeader from './components/AppHeader';
import AppInterface from './components/AppInterface';
import AppFooter from './components/AppFooter';
import AppModal from './components/AppModal';
import PortalComponent from './containers/PortalComponent';

const App: React.FC = () => {
    const [isModalActive, toggleModal] = useState<boolean>(false);

    const switchModal = () => toggleModal(isModalActive => !isModalActive);

    return (
        <>
            <AppHeader/>
            <AppInterface/>
            <AppFooter switchModal={switchModal}/>
            {isModalActive ?
                <PortalComponent id='modal-root'>
                    <AppModal switchModal={switchModal}/>
                </PortalComponent>
                : null}
        </>
    );
};

export default App;