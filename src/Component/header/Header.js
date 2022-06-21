import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./header.css"
import { NavLink } from 'react-router-dom';

import { useNavigate } from "react-router-dom";


const Header = (props) => {
  let navigate = useNavigate();



  const [searchVideos, setSearchVideos] = useState("");
  //navigate signin page if anyone click account icons
  const signin = () => {
    navigate('/signin');
  }

  const onChange = (e) => {
    setSearchVideos(e.target.value);

  }



  return (


    <div className='header'>

      <div className="left">
        <button className='btn_manu' onClick={props.onClickaHndal}> <MenuIcon className='manu_icons' /></button>
        <NavLink to="/">
          <img className='header_logo' src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="img" />
        </NavLink>
      </div>

      <div className="middile">
        <input
          name='search'
          placeholder='Search'
          type="text"
          onChange={onChange}
          value={searchVideos}
        />
        <NavLink className='search_icon' to={searchVideos && `/search/${searchVideos}`}> <SearchIcon className='search_icon' /></NavLink>
      </div>

      <div className="right">
        <KeyboardVoiceIcon className='icons' />
        <NotificationsIcon className='icons' />
        <AppsIcon className='icons' />
        <AccountCircleIcon onClick={signin} className='icons' />
      </div>
    </div>

  )
}

export default Header