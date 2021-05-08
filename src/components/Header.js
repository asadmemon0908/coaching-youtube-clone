import React, { useEffect, useState } from 'react';
import "../css/Header.css";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar, Tooltip } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { useHistory } from 'react-router';
import Fuse from 'fuse.js';
import {firstLayer, secondLayer, thirdLayer, fourthLayer} from "../youtubeVideos";
import SearchContainer from './videopage/SearchContainer';

const Header = () => {
    const history = useHistory();

    const [searchValue, setSearchValue] = useState("");

    const [searchedVideos, setSearchedVideos] = useState([]);

    const mixedLayer = [...firstLayer, ...secondLayer, ...thirdLayer, ...fourthLayer];

    //search options
    const options = {
        includeScore: true,
        keys: ["title"]
    }

    const fuse = new Fuse(mixedLayer, options);


    useEffect(() => {
        const result = fuse.search(searchValue);
        setSearchedVideos([...result]);
    }, [searchValue])



    return (
        <div className="header">
            <div  className="header__left">
                <img onClick={() => history.push("/")} src="https://i.ibb.co/G5XxVhW/You-Tube-dark-removebg-preview.png" alt="youtube-logo"/>
            </div>



            <div className="header__middle">
                <div className="header__search">
                    <div className="header__searchInput">
                        <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} type="text" placeholder="Search" />
                        <div className="search__button">
                            <SearchIcon style={{fill: "#888"}} />
                        </div>
                        <Tooltip title="Search with voice">
                    <MicIcon style={{fill: "#fff"}} />
                    </Tooltip>
                    </div>
                </div>
                {searchedVideos.length > 0 && <SearchContainer setSearchValue={setSearchValue} searchedVideos={searchedVideos} />}
                
            </div>
            
            
            
            <div className="header__right">
                <Tooltip title="create">
                <VideoCallIcon  style={{fill: "#fff"}} />
                </Tooltip>
                <Tooltip title="Apps">
                <AppsIcon  style={{fill: "#fff"}} />
                </Tooltip>
                <Tooltip title="Notifications">
                <NotificationsIcon  style={{fill: "#fff"}} />
                </Tooltip>
                <Avatar style={{ height: '30px', width: '30px', marginLeft: "10px" }} alt="Asad Memon" />
            </div>
        </div>
    );
}

export default Header;
