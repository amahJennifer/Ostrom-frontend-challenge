import './Button.css'
import React, {MouseEventHandler} from 'react'

const Button = ({name, buttonType, onClick}: TButtonProps) => {
    return (
        <button className={`btn ${buttonType ?? ''}`} onClick={onClick} disabled={!onClick} data-testid='add-student-button'>{name} </button>
    )
}

interface TButtonProps {
    name: string;
    onClick?: MouseEventHandler;
    buttonType?: string
}

export default Button
