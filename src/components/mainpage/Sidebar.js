import React from 'react';
import "../../css/mainpage/Sidebar.css";
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../../redux/dark mode/darkModeActions';

const Sidebar = () => {
    const dispatch = useDispatch();

    const darkMode = useSelector(state => state.Dark.darkMode);

    const changeMode = () => {
        dispatch(setDarkMode(!darkMode));
    }

    return (
        <div className={`sidebar ${!darkMode ? "sidebar__light" : ""}`}>
            <div className="sidebar__top">
                <MenuIcon  style={{fill: `${darkMode ? "#fff" : "#5c5b5b"}`, marginLeft: "10px"}} />
            </div>
            <div className="sidebar__icons">
                <div className="sidebar__icon sidebar__active">
                    <HomeIcon />
                    <p>Home</p>
                </div>
                <div className="sidebar__icon">
                    <ExploreIcon />
                    <p>Explore</p>
                </div>
                <div className="sidebar__icon">
                    <SubscriptionsIcon />
                    <p>Subscription</p>
                </div>
                <div className="sidebar__icon">
                    <LibraryAddIcon />
                    <p>Library</p>
                </div>
                <div onClick={changeMode} className="sidebar__icon">
                <SettingsBrightnessIcon />
                <p>{darkMode ? "Light Mode" : "Dark Mode"}</p>
            </div>
            </div>
        </div>
    );
}

export default Sidebar;
