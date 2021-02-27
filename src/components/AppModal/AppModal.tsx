import React from 'react';

import './AppModal.scss';

import rules from '../../assets/images/image-rules-bonus.svg';
import close from '../../assets/icons/icon-close.svg';

interface AppModalProps {
    switchModal: () => void
}

const AppModal: React.FC<AppModalProps> = ({switchModal}) => {

    return (
        <div onClick={switchModal} className='app-modal overlay'>
            <div onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                 className="modal">
                <div className="modal__header">
                    <h2 className='modal__header-title dark'>RULES</h2>
                    <img src={close} onClick={switchModal} alt='close' className='modal__header-close'/>
                </div>
                <div className="modal__content">
                    <img src={rules} alt="rules"/>
                </div>
            </div>
        </div>
    );
};

export default AppModal;