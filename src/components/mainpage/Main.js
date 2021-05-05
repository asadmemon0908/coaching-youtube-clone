import React from 'react';
import "../../css/mainpage/Main.css";
import Sidebar from './Sidebar';
import VideoContainers from './VideoContainers';

const Main = () => {
    return (
        <div className="main">
            <Sidebar />
            <VideoContainers />
        </div>
    );
}

export default Main;
