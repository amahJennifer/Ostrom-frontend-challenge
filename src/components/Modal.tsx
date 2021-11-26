import {ReactNode, useEffect, useState} from 'react'
import './Modal.css'
import {ReactComponent as Close} from '../assets/close.svg'

const Modal = ({children, show, title, onClose}: ModalProps) => {

    const [isOpen, setIsOpen] = useState(show)

    useEffect(() => {
        setIsOpen(show)
    }, [show])

    const close = () => {
        onClose && onClose()
    }

    return (
        <div className={`Modal ${isOpen ? 'flex' : 'hidden'}` }
             aria-labelledby="modal-title" role="dialog"
             aria-modal="true"
             data-testid='student-modal'
        >
            <div className="Modal-content-wrapper">
                <div className="Modal-header">
                    <h4>{title}</h4>
                    <button onClick={close}>
                        <Close />
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}

interface ModalProps {
    children: ReactNode,
    show: boolean,
    title: string,
    onClose?: () => void
}

export default Modal
