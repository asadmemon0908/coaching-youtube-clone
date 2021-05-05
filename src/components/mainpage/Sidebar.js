import React from 'react';
import "../../css/mainpage/Sidebar.css";
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <MenuIcon  style={{fill: "#fff"}} />
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
            </div>
        </div>
    );
}

export default Sidebar;
