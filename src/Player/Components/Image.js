import React from 'react'
import './components.scss'

const Image = ({ className, name, alt }) => {
    return (
        <div className={`image ${className}`}>
            <img src={name} alt={alt}/>
        </div>
    )
}

export default Image;
