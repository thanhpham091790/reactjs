
import { createPortal } from 'react-dom';

function Modal(props) {
    const { isOpen, onClose, children } = props;

    return (
        isOpen ? createPortal(
            <div id='modal'>
                <div>{children}</div>
                <button type='button' onClick={onClose}>Close</button>
            </div>,
            document.body
        ) : null
    );
}

export default Modal;