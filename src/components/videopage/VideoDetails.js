import React, { useState } from "react";
import "../../css/videopage/VideoDetails.css";
import ReactPlayer from "react-player/youtube";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ReplyIcon from "@material-ui/icons/Reply";
import { Avatar, Tooltip } from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { useSelector } from "react-redux";
import {useAlert} from 'react-alert';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

const VideoDetails = ({ videoDetails2 }) => {
  const videoDetails = useSelector((state) => state.Video.video);
  const [notifications, setNotifications] = useState(false);

  const alert = useAlert();

  console.log(videoDetails2);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`http://localhost:3000/video?vid=${videoDetails?.id}`);
    alert.show("Video Link copied to clipboard");
  }

  return (
    <div className="videoDetails">
      <div className="videoDetails__video">
        <ReactPlayer
          width="1240px"
          height="720px"
          url={videoDetails?.videoUrl}
          playing
          controls
          config={{
            youtube: {
              preload: true,
            },
          }}
        />
      </div>
      <div className="videoDetails__details">
        <div className="videoDetails__left">
          <h5>{videoDetails?.title}</h5>
          <p>1,677 views • Premiered Oct 3, 2020</p>
        </div>
        <div className="videoDetails__right">

        <Tooltip title="I like this">
          <div className="videoDetails__icon">
            <ThumbUpAltIcon style={{ marginRight: "8px" }} />
            192
          </div>
          </Tooltip>

          <div className="videoDetails__icon">
            <ThumbDownIcon style={{ marginRight: "8px" }} />
            192
          </div>
          <Tooltip title="Share">
          <div onClick={copyToClipboard} className="videoDetails__icon">
            <ReplyIcon
              style={{ marginRight: "8px", transform: "scaleX(-1)" }}
            />
            SHARE
          </div>
          </Tooltip>
          <div className="videoDetails__icon">
            <PlaylistAddIcon style={{ marginRight: "8px" }} />
            SAVE
          </div>
          <div className="videoDetails__icon">
            <MoreHorizIcon />
          </div>
        </div>
      </div>
      <div className="videoAuthor__details">
        <div className="videoAuthor__left">
          <Avatar src={videoDetails?.profile} alt={videoDetails?.author} />
          <div className="videoAuthorDetails">
            <h6>{videoDetails?.author}</h6>
            <p>3.96k Subscribers</p>
          </div>
        </div>
        <div className="videoAuthor__right">
          <button>SUBSCRIBED</button>
          
          {notifications ? <NotificationsActiveIcon onClick={() => setNotifications(false)} /> : <NotificationsNoneIcon onClick={() => setNotifications(true)} />}


        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
