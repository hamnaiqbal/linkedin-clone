import React from 'react';
import "./HeaderOption.css";
import Avatar from '@mui/material/Avatar';

function HeaderOption({avatar,Icon,title,onClick}) {
  return (
    <div onClick={onClick} className="header_options">

      {Icon && <Icon className="headerOptions_icon"/>}
      {avatar &&
      <Avatar className="headerOptions_icon" src={avatar} />}
      <h3 className='headerOption_title'>{title}</h3>

    </div>
  )
}

export default HeaderOption