import React from 'react';
import "./Sidebar.css";
import Avatar from '@mui/material/Avatar';
import img from "./un.jpg";
import {selectUser} from '../../features/userSlice';
import {useSelector} from "react-redux";


function Sidebar() {
  const user=useSelector(selectUser)

const recentItem= (topics)=>(

  <div className="sidebar_recentItem">
    <span className="sidebar_hashtag">#</span>
    <p>{topics}</p>
  </div>
)


  return (
    <div className='sidebar'>
        

        <div className="sidebar_top">
            <img src={img} alt=""/>
            <Avatar className='sidebar_avatar'/>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>

        </div>
        <div className="sidebar_status">
            <div className="sidebar_stats">
                <p> Who Viewd You?</p>
                <p className='SidebarstatNumber'>2,547</p>
            </div>
            <div className="sidebar_stats">
            <p> Total views </p>
                <p className='SidebarstatNumber'>4,547</p>

            </div>
          
        </div>


        {/* Sidebar Bottom */}

        <div className="sidebar_bottom">
          <p>Recent</p>
          {recentItem("Programming")}
          {recentItem("Devops Engineer")}
          {recentItem("Web Developer")}
          {recentItem("SEO Enthusiast")}
          {recentItem(" UI/UX Designer")}


        </div>
        
      
    </div>
  )
}

export default Sidebar



