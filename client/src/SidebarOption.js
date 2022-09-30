import React from 'react'
import "./SidebarOption.css"
function SidebarOption({title,Icon,onClick}) {
    return (
        <div onClick ={onClick}className = "sidebarOption">
        {Icon && <Icon className = "sidebarOption__icon"></Icon>}
         {Icon ? <h4>{title}</h4> : <p>{title} </p>  }
        </div>
    );
}

export default SidebarOption
