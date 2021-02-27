import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface PortalComponentProps {
    children: JSX.Element,
    id: string
}

const PortalComponent: React.FC<PortalComponentProps> = ({ children, id }) => {
    const modalRoot: HTMLDivElement = document.createElement('div');
    modalRoot.id = id;

    useEffect(() => {
        document.body.prepend(modalRoot);
        document.body.style.overflow = 'hidden';
        return () => {
            modalRoot.remove();
            document.body.style.overflow = '';
        };
    }, [modalRoot]);


    return (
        ReactDOM.createPortal(
            children,
            modalRoot
        )
    );
};

export default PortalComponent;