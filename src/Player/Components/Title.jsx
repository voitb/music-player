import React from 'react'

const Title = ({songName, artist}) => {
    return (
        <div className="title-container">
            <div className="song-name">
                {songName}
            </div>
            <div className="artist">
                {artist} 
            </div>
        </div>
    )
}

export default Title;
