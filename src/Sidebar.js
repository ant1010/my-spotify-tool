import React,{useState,useEffect}from 'react'
import "./Sidebar.css"
import SidebarOption from "./SidebarOption.js";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';


function Sidebar({switcher}) {
   
 const [toMobile, setToMobile] = useState(false);
 function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  useEffect(() => {
    handleResize();
    function handleResize() {
        const dimensions = getWindowDimensions();
        console.log(dimensions);
        if(dimensions.width <= 675){
           setToMobile(false)
        }else{
            setToMobile("desktop");
        }
      //setWindowDimensions("");
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleClick = (title) => {
    console.log(title)
    switcher(title);
}
    return (
        <div>
        {toMobile? <div  className = "sidebar">
        <img className = "sidebar_logo" src ="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=''></img>
        <SidebarOption onClick = {() => handleClick('Home')} Icon = {HomeIcon} title = "Home" mobile ={false}/>
        <SidebarOption onClick = {() => handleClick('Search')}Icon = {SearchIcon} title =  "Search"mobile ={false}/>
        <SidebarOption onClick = {() => handleClick('My Library')}Icon = {LibraryMusicIcon}title =  "My Library"mobile ={false}/>
        <SidebarOption onClick = {() => handleClick('Create Mass Playlist')}Icon = {LibraryAddIcon}title =  "Create Mass Playlist"mobile ={false}/>
    </div>:<div className="sidebar_mobile"> 
    <img className = "mobile_logo" src ="https://mazdem.com/images/networks/spotify.png" alt=''></img> 
        <SidebarOption onClick = {() => handleClick('Home')} Icon = {HomeIcon} title = "" mobile ={true}/>
        <SidebarOption onClick = {() => handleClick('Search')}Icon = {SearchIcon} title =  "" mobile ={true}/>
        <SidebarOption onClick = {() => handleClick('My Library')}Icon = {LibraryMusicIcon}title =  "" mobile ={true}/>
        <SidebarOption onClick = {() => handleClick('Create Mass Playlist')}Icon = {LibraryAddIcon}title =  "" mobile ={true}/>
   


    </div>}
    </div>
       

    )
}

export default Sidebar
