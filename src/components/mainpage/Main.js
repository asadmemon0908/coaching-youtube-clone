import React, { useEffect } from 'react';
import "../../css/mainpage/Main.css";
import Sidebar from './Sidebar';
import VideoContainers from './VideoContainers';

const Main = () => {

    useEffect(() => {
        document.title = "YouTube Clone";
    }, [])

    return (
        <div className="main">
            <Sidebar />
            <VideoContainers />
        </div>
    );
}

export default Main;
