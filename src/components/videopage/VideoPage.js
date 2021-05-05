import React from 'react';
import "../../css/videopage/VideoPage.css";
import Header from '../Header';
import MoreVideos from './MoreVideos';
import VideoDetails from './VideoDetails';
import { useLocation } from "react-router";
import { firstLayer, fourthLayer, secondLayer, thirdLayer } from '../../youtubeVideos';
import { useDispatch } from 'react-redux';
import { setVideo } from '../../redux/videos/videoAction';


const VideoPage = () => {

    const dispatch = useDispatch()

    const query = new URLSearchParams(useLocation().search);
    const videoId = query.get("vid");

    const mixedArray = [...firstLayer, ...secondLayer, ...thirdLayer, ...fourthLayer];

    const videoArray = mixedArray.filter(video => video.id === videoId);

    dispatch(setVideo(videoArray[0]));

    return (
        <div className="videoPage">
            <Header />
            <div className="videoPage__container">
                <VideoDetails videoDetails2={videoArray[0]} />
                <MoreVideos videoId={videoId} mixedArray={mixedArray} />
            </div>
        </div>
    );
}

export default VideoPage;
