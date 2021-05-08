import React from 'react';
import "../../css/videopage/MoreVideos.css";
import getRandom from '../../util/getRandom';
import SideVideo from './SideVideo';

const MoreVideos = ({mixedArray, videoId}) => {

    const filteredVideoArray = mixedArray.filter(video => video.id !== videoId);

    const filtered20 = getRandom(filteredVideoArray, 20);
    console.log(filtered20);

    return (
        <div className="moreVideos__container">
        
            {filtered20.map(video => <SideVideo key={video?.id} video={video} />)}
            


        </div>
    );
}

export default MoreVideos;
