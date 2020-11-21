import React from 'react'
import './components.scss'

const Icon = ({ className, name, alt }) => {
    return (
        <div className={`icon ${className}`}>
            <img src={name} alt={alt}/>
        </div>
    )
}

export default Icon;
