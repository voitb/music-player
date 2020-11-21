import React from 'react'
import Icon from '../Components/Icon'
import Audio from '../../svgs/audio.svg'
import Chevron from '../../svgs/chevron.svg'
import FastForward from '../../svgs/fast-forward.svg'
import PlayButton from '../../svgs/play-button.svg'
import Playlist from '../../svgs/playlist.svg'

import './controller.scss'

const Controller = () => {
    return (
        <>
            <div className="controller-container">
                <div className="controller-row">
                    <div className="side-controlls">
                        <Icon name={Playlist} alt="Playlist Icon" />
                    </div>
                    <div className="middle-controlls">
                        <Icon name={FastForward} alt="FastForward Icon" className="rotate-icon nav-controlls" />
                        <Icon name={PlayButton} alt="PlayButton Icon" className="nav-controlls play" />
                        <Icon name={FastForward} alt="FastForward Icon" className="nav-controlls" />
                    </div>
                    <div className="side-controlls">
                        <Icon name={Audio} alt="Audio Icon" />
                    </div>
                </div>
            </div>
            <div className="lower-controller">
                <Icon name={Chevron} alt="Chevron Icon" />
            </div>
        </>
    )
}

export default Controller;
