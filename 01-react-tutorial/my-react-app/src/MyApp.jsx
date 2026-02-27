import { useState } from "react";
import Modal from "./Modal";

function MyApp() {
    const [isOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <h1>My App</h1>
            <button type="button" onClick={openModal}>
                Open Modal
            </button>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <h2>Modal Content</h2>
                <p>This content is rendered outside the App component!</p>
            </Modal>
        </div>
    );
}

export default MyApp;