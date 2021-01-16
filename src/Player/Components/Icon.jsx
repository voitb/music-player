import React from 'react'
import './components.scss'

const Icon = ({ className, name, alt, onClick }) => {
    return (
        <div className={`icon ${className}`} onClick={onClick}>
            <img src={name} alt={alt}/>
        </div>
    )
}

export default Icon;
