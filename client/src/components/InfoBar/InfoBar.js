import React from 'react';

import './InfoBar.css';

const InfoBar = () => {
    <div className="InfoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online icon" />
            <h3>roomName</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="close image" /></a>
        </div>
    </div>
}