
import { createPortal } from 'react-dom';

function Modal(props) {
    const { isOpen, onClose, children } = props;

    return (
        isOpen ? createPortal(
            <div
                id='modal'
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div
                    style={{
                        background: 'white',
                        padding: '20px',
                        borderRadius: '8px'
                    }}
                >
                    {children}
                    <button type='button' onClick={onClose}>Close</button>
                </div>
            </div>,
            document.body
        ) : null
    );
}

export default Modal;