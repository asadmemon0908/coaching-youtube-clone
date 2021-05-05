import React from 'react';
import { useHistory } from 'react-router';

const SideVideo = ({video}) => {
    const history = useHistory();

    const playThisVideo = () => {
        history.push(`/video?vid=${video?.id}`);
    }

    return (
        <div onClick={playThisVideo} className="moreVideos">
                <div className="moreVideos__video">
                    <img src={video?.thumbnail} alt="video__tag"/>
                </div>
                <div className="moreVideos__details">
                    <h5>{video?.title}</h5>
                    <p>{video?.author}</p>
                    <p>653 Views * 3 Months Ago</p>
                </div>
            </div>
    );
}

export default SideVideo;
