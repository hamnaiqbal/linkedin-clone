import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import logo from "./logo.png";
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import me from "./Hamna.jpeg";
import { useDispatch } from 'react-redux';
import { auth } from '../Feed/firebase';
import {logout} from '../../features/userSlice';

function Header() {
 

  const dispatch= useDispatch();

  const logoutofApp=()=>{
    dispatch(logout())
    auth.signOut();
  }
  return (
    <div className="header">
     


      {/* Search & logo Container */}

      <div className="header_left">

        <img src={logo} alt=""></img>

        <div className="header_search">
        <SearchIcon />
          <input type="text" placeholder='Search'/>
        
          

        </div>

      </div>

      {/* Icons container */}

      <div className="header_right">

        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOption Icon={ChatIcon} title="Messaging"/>
        <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOption avatar={me}  title="me" onClick={logoutofApp}/>

      </div>


    </div>
  )
}

export default Header