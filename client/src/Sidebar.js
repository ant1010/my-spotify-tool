import React from 'react'
import "./Sidebar.css"
import SidebarOption from "./SidebarOption.js";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';


function Sidebar({switcher}) {
    const handleClick = (title) => {
        console.log(title)
        switcher(title);
    }
    return (
        <div  className = "sidebar">
            <img className = "sidebar_logo" src ="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=''></img>
            <SidebarOption onClick = {() => handleClick('Home')} Icon = {HomeIcon} title = "Home"/>
            <SidebarOption onClick = {() => handleClick('Search')}Icon = {SearchIcon} title =  "Search"/>
            <SidebarOption onClick = {() => handleClick('My Library')}Icon = {LibraryMusicIcon}title =  "My Library"/>
            <SidebarOption onClick = {() => handleClick('Create Mass Playlist')}Icon = {LibraryAddIcon}title =  "Create Mass Playlist"/>
        </div>

    )
}

export default Sidebar
