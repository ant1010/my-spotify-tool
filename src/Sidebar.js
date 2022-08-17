import React from 'react'
import "./Sidebar.css"
import SidebarOption from "./SidebarOption.js";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';


function Sidebar() {
    return (
        <div className = "sidebar">
            <img className = "sidebar_logo" src ="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=''></img>
            <SidebarOption Icon = {HomeIcon} title = "Home"/>
            <SidebarOption Icon = {SearchIcon} title =  "Search"/>
            <SidebarOption Icon = {LibraryMusicIcon}title =  "My Library"/>
            <SidebarOption Icon = {LibraryAddIcon}title =  "Create Mass Playlist"/>
        </div>

    )
}

export default Sidebar
