import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router";
import ReactPlayer from 'react-player/youtube';


const VideoColumn = ({ video, randomMonths, randomViews }) => {
  const [playGif, setPlayGif] = useState(false);
  const history = useHistory();

  const [videoTime, setVideoTime] = useState(null);



  //   function truncate(str, n) {
  //   return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  // }


  const moveToVideoPage = () => {
    
    history.push(`/video?vid=${video?.id}`);
  }


  const getTime = (time) => {
    var sec_num = parseInt(time, 10)
    var hours   = Math.floor(sec_num / 3600)
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0)
        .join(":")
  };


  

  return (
    <div onClick={moveToVideoPage} className="videoContainer__column">

    <ReactPlayer onDuration={(time) => setVideoTime(time)} style={{display: "none"}} url={video?.videoUrl} />

      <div className="video__thumbnailContainer">
        <div className="video__thumbnail">
          <div
            className="video__thumbnail"
            onMouseEnter={() => setPlayGif(true)}
            onMouseLeave={() => setPlayGif(false)}
          >
            {!playGif && videoTime && <p>{getTime(videoTime)}</p>}

          <img src={playGif ? video?.gif : video?.thumbnail} alt=""/>


          </div>
        </div>
      </div>
      <div className="video__details">
        <div className="video__profile">
          <Avatar src={video?.profile} alt="Asad Memon" />
        </div>
        <div className="video__description">
          <p>{video?.title}</p>
          <div className="video__authorViewsContainer">
            <p>{video?.author}</p>
            <div className="video__viewsAndAgo">
              <p>{`${randomViews}K • ${randomMonths} ${
                randomMonths === 1 ? "Month" : "Months"
              } Ago`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoColumn;
